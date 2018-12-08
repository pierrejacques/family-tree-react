import * as React from 'react'
import Loadable from 'react-loadable'

import './loadable.less'

const Loading = ({ error }) => {
    if (error) {
        return (
            <div className="loadable-placeholder">页面加载错误</div>
        )
    }
    return (
        <div className="loading-placeholder">页面加载中...</div>
    )
}

export default (loader) => Loadable({
    loader,
    loading: Loading,
})
