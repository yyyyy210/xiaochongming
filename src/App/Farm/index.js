const FarmIndex = function(call){
    return {
        path:'farm',
        name:'farm',
        getComponent (nextState, cb) {
            if (call && typeof call === 'function') {
                call(require('./FarmIndex/model'));
            }
            require.ensure([], require => {cb(null, require('./FarmIndex'))}, 'farmindex')
        }
    }
}

const FarmHome = function(call){
    return {
        path:'farm/home/:id',
        name:'farm/home',
        getComponent (nextState, cb) {
            if (call && typeof call === 'function') {
                call(require('./FarmHome/model'));
            }
            require.ensure([], require => {cb(null, require('./FarmHome'))}, 'farmhome')
        }
    }
}

const FarmView = function(call){
    return {
        path:'farm/view/:id',
        name:'farm/view',
        getComponent (nextState, cb) {
            if (call && typeof call === 'function') {
                call(require('./FarmView/model'));
            }
            require.ensure([], require => {cb(null, require('./FarmView'))}, 'farmview')
        }
    }
}

const FarmHouse = function(call){
    return {
        path:'farm/house/:id',
        name:'farm/house',
        getComponent (nextState, cb) {
            if (call && typeof call === 'function') {
                call(require('./FarmHouse/FarmHouseIndex/model'));
            }
            require.ensure([], require => {cb(null, require('./FarmHouse/FarmHouseIndex'))}, 'farmhouse')
        }
    }
}

const FarmHousePayment = function(){
    return {
        path:'farm/house/payment',
        name:'farm/house/payment',
        getComponent (nextState, cb) {
            require.ensure([], require => {cb(null, require('./FarmHouse/FarmHousePayment'))}, 'farmhousepayment')
        }
    }
}

const DishPackage = function(call){
    return {
        path:'farm/dishPackage/:id',
        name:'farm/dishPackage',
        getComponent (nextState, cb) {
            if (call && typeof call === 'function') {
                call(require('./FarmView/DishPackage/model'));
            }
            require.ensure([], require => {cb(null, require('./FarmView/DishPackage'))}, 'DishPackage')
        }
    }
}

export  {FarmIndex,FarmHome,FarmView,FarmHouse,FarmHousePayment,DishPackage}