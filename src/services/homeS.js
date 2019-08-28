import xhr from './index.js'

/**
 * 文章管理
 */
//文章列表
function articleManageList(param) {
  return xhr({
    url: 'admin/v1/articles',
    body:param
  })
}
export {
  articleManageList,
};