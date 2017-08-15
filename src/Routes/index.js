import React, { PropTypes } from 'react'
import { Router } from 'dva/router';
import App from './app'
//import Home from 'App/Home'
import {Xcm,ViewSpot,Error,Login,FarmIndex,FarmHome,FarmView,FarmHouse,FarmHousePayment,GatherIndex,GatherView,FootIndex,FootView,DishPackage} from 'App'

const cached = {}
const registerModel = (app, model) => {
  if (!cached[model.namespace]) {
    app.model(model)
    cached[model.namespace] = 1
  }
}

const Routers = function ({ history, app }) {

  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {cb(null, { component: Xcm })}, 'xcm')
      },
      childRoutes: [
        ViewSpot(model => registerModel(app, model)),
        FarmIndex(model => registerModel(app, model)),
        FarmHome(model => registerModel(app, model)),
        FarmView(model => registerModel(app, model)),
        FarmHouse(model => registerModel(app, model)),
        DishPackage(model => registerModel(app, model)),
        FarmHousePayment(),
        GatherIndex(),
        GatherView(),
        FootIndex(),
        FootView(),
        Login(),
        {
          path: '*',
          name: 'error',
          getComponent (nextState, cb) {
            require.ensure([], require => {cb(null, Error)}, 'error')
          },
        }
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers;