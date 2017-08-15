export default {
	namespace: 'AccountUser',
	state: {

	},
	subscriptions: {
		setup({ dispatch, history }) {
			return history.listen(({ pathname, query }) => {

			});
		}
	},
	effects: {
		*query({ payload }, { call, put }) {
			const res = yield call(VILLAGE, payload);
		}
	},
	reducers: {
		save (state, { payload }) {
			return { ...state, ...payload}
		},
	},
};
