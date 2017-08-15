const FootIndex = function(){
    return {
        path:'foot',
        name:'foot',
        getComponent (nextState, cb) {
            require.ensure([], require => {cb(null, require('./FootIndex'))}, 'foot')
        }
    }
}

const FootView = function(){
    return {
        path:'foot/view',
        name:'foot/view',
        getComponent (nextState, cb) {
            require.ensure([], require => {cb(null, require('./FootView'))}, 'footview')
        }
    }
}

export  {FootIndex,FootView}