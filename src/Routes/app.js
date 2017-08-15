import React, { PropTypes } from 'react'
import { connect } from 'dva'
import { NavBar } from 'antd-mobile';

import './style.less'

function App ({ children, location, dispatch, app, loading }) {
    return (
        <div>
            <NavBar leftContent="back" mode="light" onLeftClick={() => console.log('onLeftClick')}>测试</NavBar>
            {children}
        </div>
    )
}

//参数类型验证
App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ app, loading }) => ({ app, loading }))(App)