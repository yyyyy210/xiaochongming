const AccountComments = function(call){
    return {
        path:'farm',
        name:'farm',
        getComponent (nextState, cb) {
            if (call && typeof call === 'function') {
                call(require('./AccountComments/model'));
            }
            require.ensure([], require => {cb(null, require('./AccountComments'))}, 'accountcomments')
        }
    }
}

export  {AccountComments}