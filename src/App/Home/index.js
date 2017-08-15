import Xcm from './Xcm'

const ViewSpot = function(call){
    return {
        path:'viewspot/:id',
        name:'viewspot',
        getComponent (nextState, cb) {
            if (call && typeof call === 'function') {
                call(require('./ViewSpot/model'));
            }
            require.ensure([], require => {cb(null, require('./ViewSpot'))}, 'viewspot')
        }
    }
}

export  {Xcm,ViewSpot}