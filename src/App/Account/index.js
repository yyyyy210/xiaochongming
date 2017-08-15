const AccountUser = function (call) {
    return {
        path: 'account',
        name: 'account',
        getComponent(nextState, cb) {
            if (call && typeof call === 'function') {
                call(require('./User/model'));
            }
            require.ensure([], require => { cb(null, require('./User')) }, 'accountuser')
        }
    }
}

export { AccountUser }