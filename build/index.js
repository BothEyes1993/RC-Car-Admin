const { run } = require('runjs')
const chalk = require('chalk')
const config = require('../vue.config.js')
const httpProxy = require('http-proxy')
const rawArgv = process.argv.slice(2)
const args = rawArgv.join(' ')

if (process.env.npm_config_preview || rawArgv.includes('--preview')) {
  const report = rawArgv.includes('--report')

  run(`vue-cli-service build ${args}`)

  const proxy = httpProxy.createProxyServer({
    ws: true,
    secure: false,
    changeOrigin: true,
    target: 'https://api.java.crmeb.net'
  })

  proxy.on('error', (err, req, res) => {
    res.writeHead(500, {
      'content-type': 'text/plain'
    })
    res.end(err ? err.message : 'Something went wrong. And we are reporting a custom error message.')
  })

  const port = 9526
  const publicPath = config.publicPath

  var connect = require('connect')
  var serveStatic = require('serve-static')
  const app = connect()

  app.use(
    publicPath,
    serveStatic('./dist', {
      index: ['index.html', '/']
    })
  ).use(function (req, res) {
    proxy.web(req, res)
  })

  app.listen(port, function () {
    console.log(chalk.green(`> Preview at  http://localhost:${port}${publicPath}`))
    if (report) {
      console.log(chalk.green(`> Report at  http://localhost:${port}${publicPath}report.html`))
    }

  })
} else {
  run(`vue-cli-service build ${args}`)
}
