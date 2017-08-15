import { VILLAGE, HOUSES, RESTAURANTS, ORCHARDS } from './service';
import pathToRegexp from 'path-to-regexp';

export default {
	namespace: 'FarmHome',
	state: {
		village: {},
		houses:[],
		restaurants:[]
	},
	subscriptions: {
		setup({ dispatch, history }) {
			return history.listen(({ pathname, query }) => {
				const match = pathToRegexp('/farm/home/:key').exec(pathname);
				if (match) {
					dispatch({ type: 'query', payload: query });
				}
			});
		}
	},
	effects: {
		*query({ payload }, { call, put }) {
			const res = yield call(VILLAGE, payload);
			yield put({ type: 'houses', payload: {} })
			yield put({ type: 'save', payload: { village: res.data } });
		},
		*houses({ payload }, { call, put }) {
			const res = yield call(HOUSES, payload);
			yield put({ type: 'save', payload: { houses: res.data } });
		},
		*restaurants({ payload }, { call, put }) {
			const res = yield call(RESTAURANTS, payload);
			yield put({ type: 'save', payload: { restaurants: res.data } });
		},
		*orchards({ payload }, { call, put }) {
			const res = yield call(ORCHARDS, payload);
			yield put({ type: 'save', payload: { orchards: res.data } });
		},
	},
	reducers: {
		save (state, { payload }) {
			return { ...state, ...payload}
		},
	},
};
