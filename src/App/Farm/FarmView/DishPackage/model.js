import { DISHPACKAGE } from './service';
import pathToRegexp from 'path-to-regexp';

export default {
	namespace: 'DishPackage',
	state: {
		dishPackage: {}
	},
	subscriptions: {
		setup({ dispatch, history }) {
			return history.listen(({ pathname, query }) => {
				const match = pathToRegexp('/farm/dishPackage/:key').exec(pathname);
				if (match) {
					dispatch({ type: 'query', payload: query });
				}
			});
		}
	},
	effects: {
		*query({ payload }, { call, put }) {
			const res = yield call(DISHPACKAGE, payload);
			yield put({ type: 'save', payload: { dishPackage: res.data } });
		}
	},
	reducers: {
		save (state, { payload }) {
			return { ...state, ...payload}
		},
	},
};
