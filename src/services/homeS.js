import xhr from './index.js'

/**
 * 文章管理
 */
//文章列表
function articleManageList(param) {
  return xhr({
    url: '/v4_0/article/list',
    body:param
  })
}
export {
  articleManageList,
};