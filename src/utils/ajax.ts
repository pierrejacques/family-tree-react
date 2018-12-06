const baseURL = '//www.zhongxiaotuan.com/api/'

export default (url: string, ...params: any[]) => {
    return fetch(baseURL + url, ...params).then(res => res.json())
}
