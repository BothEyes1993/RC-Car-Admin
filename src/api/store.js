import request from '@/utils/request'

/**
 * 新增商品
 * @param pram
 */
export function productCreateApi (data) {
  return request({
    url: '/admin/store/product/save',
    method: 'POST',
    data
  })
}

/**
 * 编辑商品
 * @param pram
 */
export function productUpdateApi (data) {
  return request({
    url: '/admin/store/product/update',
    method: 'POST',
    data
  })
}

/**
 * 商品详情
 * @param pram
 */
export function productDetailApi (id) {
  return request({
    url: `/admin/store/product/info/${id}`,
    method: 'GET'
  })
}

/**
 * 删除商品
 * @param pram
 */
export function productDeleteApi (id) {
  return request({
    url: `/admin/store/product/delete/${id}`,
    method: 'get'
  })
}

/**
 * 商品列表 表头数量
 */
export function productHeadersApi () {
  return request({
    url: '/admin/store/product/tabs/headers',
    method: 'GET'
  })
}

/**
 * 商品列表
 * @param pram
 */
export function productLstApi (params) {
  return request({
    url: '/admin/store/product/list',
    method: 'GET',
    params
  })
}
/**
 * 商品分类
 * @param pram
 */
export function categoryApi (params) {
  return request({
    url: '/admin/category/list/tree',
    method: 'GET',
    params
  })
}
/**
 * 商品上架
 * @param pram
 */
export function putOnShellApi (id) {
  return request({
    url: `/admin/store/product/putOnShell/${id}`,
    method: 'GET'
  })
}
/**
 * 商品下架
 * @param pram
 */
export function offShellApi (id) {
  return request({
    url: `/admin/store/product/offShell/${id}`,
    method: 'GET'
  })
}
/**
 * 商品规格 列表
 * @param pram
 */
export function templateListApi (params) {
  return request({
    url: '/admin/store/product/rule/list',
    method: 'GET',
    params
  })
}
/**
 * 商品规格 删除
 * @param pram
 */
export function attrDeleteApi (id) {
  return request({
    url: `/admin/store/product/rule/delete/${id}`,
    method: 'get'
  })
}
/**
 * 商品规格 新增
 * @param pram
 */
export function attrCreatApi (data) {
  return request({
    url: '/admin/store/product/rule/save',
    method: 'POST',
    data
  })
}
/**
 * 商品规格 编辑
 * @param pram
 */
export function attrEditApi (data) {
  return request({
    url: '/admin/store/product/rule/update',
    method: 'POST',
    data
  })
}
/**
 * 商品规格 详情
 * @param pram
 */
export function attrInfoApi (id) {
  return request({
    url: `admin/store/product/rule/info/${id}`,
    method: 'GET'
  })
}
/**
 * 商品评论 列表
 * @param pram
 */
export function replyListApi (params) {
  return request({
    url: '/admin/store/product/reply/list',
    method: 'GET',
    params
  })
}
/**
 * 商品评论 新增
 * @param pram
 */
export function replyCreatApi (data) {
  return request({
    url: '/admin/store/product/reply/save',
    method: 'POST',
    data
  })
}
/**
 * 商品评论 编辑
 * @param pram
 */
export function replyEditApi (data) {
  return request({
    url: '/admin/store/product/reply/update',
    method: 'POST',
    data
  })
}
/**
 * 商品评论 详情
 * @param pram
 */
export function replyInfoApi (id) {
  return request({
    url: `/admin/store/product/reply/info/${id}`,
    method: 'GET'
  })
}
/**
 * 商品评论 删除
 * @param pram
 */
export function replyDeleteApi (id) {
  return request({
    url: `/admin/store/product/reply/delete/${id}`,
    method: 'GET'
  })
}

/**
 * 商品评论 回复
 * @param pram
 */
export function replyCommentApi (data) {
  console.log(data)
  return request({
    url: '/admin/store/product/reply/comment',
    method: 'post',
    data
  })
}

/**
 * 商品评论 导出
 * @param pram
 */
export function productExportApi (params) {
  return request({
    url: '/admin/export/excel/product',
    method: 'get',
    params
  })
}

/**
 * 商品复制
 * @param pram
 */
export function importProductApi (params) {
  return request({
    url: '/admin/store/product/importProduct',
    method: 'post',
    params
  })
}

/**
 * 恢复
 * @param pram
 */
export function restoreApi (params) {
  return request({
    url: '/admin/store/product/importProduct',
    method: 'post',
    params
  })
}
