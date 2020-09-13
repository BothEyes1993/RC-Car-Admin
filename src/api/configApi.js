import request from '@/utils/request'

// 配置管理

export function configDelete(pram) {
  const data = {
    id: pram.id
  }
  return request({
    url: 'admin/system/config/delete',
    method: 'GET',
    params: data
  })
}

export function configInfo(pram) {
  const data = {
    id: pram.id
  }
  return request({
    url: 'admin/system/config/info',
    method: 'GET',
    params: data
  })
}
export function configList(pram) {
  const data = {
    id: pram.id,
    configTabId: pram.configTabId,
    desc: pram.desc,
    high: pram.high,
    info: pram.info,
    inputType: pram.inputType,
    menuName: pram.menuName,
    parameter: pram.parameter,
    required: pram.required,
    sort: pram.sort,
    status: pram.status,
    type: pram.type,
    updateType: pram.updateType,
    value: pram.value,
    width: pram.width,
    page: pram.page,
    limit: pram.limit
  }
  return request({
    url: 'admin/system/config/list',
    method: 'POST',
    params: data
  })
}

export function configSave(pram) {
  const data = {
    id: pram.id,
    configTabId: pram.configTabId,
    desc: pram.desc,
    high: pram.high,
    info: pram.info,
    inputType: pram.inputType,
    menuName: pram.menuName,
    parameter: pram.parameter,
    required: pram.required,
    sort: pram.sort,
    status: pram.status,
    type: pram.type,
    updateType: pram.updateType,
    value: pram.value,
    width: pram.width
  }
  return request({
    url: 'admin/system/config/save',
    method: 'POST',
    params: data
  })
}

export function configUpdate(pram) {
  const data = {
    id: pram.id,
    configTabId: pram.configTabId,
    desc: pram.desc,
    high: pram.high,
    info: pram.info,
    inputType: pram.inputType,
    menuName: pram.menuName,
    parameter: pram.parameter,
    required: pram.required,
    sort: pram.sort,
    status: pram.status,
    type: pram.type,
    updateType: pram.updateType,
    value: pram.value,
    width: pram.width
  }
  return request({
    url: 'admin/system/config/update',
    method: 'POST',
    params: data
  })
}
