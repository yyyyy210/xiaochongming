const GatherIndex = function(){
    return {
        path:'gather',
        name:'gather',
        getComponent (nextState, cb) {
            require.ensure([], require => {cb(null, require('./GatherIndex'))}, 'gather')
        }
    }
}

const GatherView = function(){
    return {
        path:'gather/view',
        name:'gather/view',
        getComponent (nextState, cb) {
            require.ensure([], require => {cb(null, require('./GatherView'))}, 'gatherview')
        }
    }
}

export  {GatherIndex,GatherView}