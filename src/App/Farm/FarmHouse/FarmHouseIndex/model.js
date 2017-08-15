import { QUERY } from './service';
import pathToRegexp from 'path-to-regexp';

export default {
	namespace: 'FarmHouse',
	state: {
		data: {}
	},
	subscriptions: {
		setup({ dispatch, history }) {
			return history.listen(({ pathname, query }) => {
				const match = pathToRegexp('/farm/house/:key').exec(pathname);
				if (match) {
					dispatch({ type: 'query', payload: {id:match[1]} });
				}
			});
		}
	},
	effects: {
		*query({ payload }, { call, put }) {
			const res = yield call(QUERY, payload.id);
			yield put({ type: 'save', payload: { data: res.data } });
		},
	},
	reducers: {
		save (state, { payload }) {
			return { ...state, ...payload}
		},
	},
};
