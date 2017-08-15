import { routerRedux } from 'dva/router'
import { config } from 'Utils'
import {POST} from './service';

export default {
  namespace: 'login',
  state: {
      error:''
  },
  subscriptions: {

  },
  effects: {

  },
  reducers: {
    setError(state, { payload: { error} }) {
        return { ...state, error};
    },
  },
}
