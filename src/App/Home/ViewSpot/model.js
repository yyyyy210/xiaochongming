import { QUERY } from './service';
import pathToRegexp from 'path-to-regexp';

export default {
  namespace: 'ViewSpot',
  state: {

  },
  subscriptions: {
    setup({ dispatch, history }) {
			return history.listen(({ pathname, query }) => {
				const match = pathToRegexp('/viewspot/:key').exec(pathname);
				if (match) {
					dispatch({ type: 'query', payload: query });
				}
			});
    },
  },
  effects: {
    *query({ payload }, { call, put }) {
			const res = yield call(QUERY, payload);
			yield put({ type: 'save', payload: { data: res.data } });
    },
  },
  reducers: {
    save(state, { payload: { data } }) {
      return { ...state, data };
    }
  },
};
