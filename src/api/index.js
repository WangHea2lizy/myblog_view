import request from '@/router/axios'

export const getArticleList = () => {
  return request({
    url: `/simu/articleList`,
    method: 'get'
  })
}
