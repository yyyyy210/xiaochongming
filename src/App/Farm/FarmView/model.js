import { RESTAURANT } from './service';
import pathToRegexp from 'path-to-regexp';

export default {
	namespace: 'FarmView',
	state: {
		restaurant: {}
	},
	subscriptions: {
		setup({ dispatch, history }) {
			return history.listen(({ pathname, query }) => {
				const match = pathToRegexp('/farm/view/:key').exec(pathname);
				if (match) {
					dispatch({ type: 'query', payload: query });
				}
			});
		}
	},
	effects: {
		*query({ payload }, { call, put }) {
			const res = yield call(RESTAURANT, payload);
			yield put({ type: 'save', payload: { restaurant: res.data } });
		}
	},
	reducers: {
		save (state, { payload }) {
			return { ...state, ...payload}
		},
	},
};
