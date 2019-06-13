
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
//       return history.listen(async ({ pathname, search, query}) => {
// 　      if (pathname==="/testdemo") { // 当进入testdemo这路由，就会触发fetchUser方法
// 　　　　  dispatch({ type: "fetchUser" })
// 　　　　 }
// 　　　})
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
