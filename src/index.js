import dva from 'dva';
import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';
import createLoading from 'dva-loading';
import Routes from "Routes";
import appModels from "Routes/appModels";

import './index.html';
import './style.css'

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
  history: useRouterHistory(createHashHistory)({ queryKey: false }),
  //history: browserHistory,
  onError(e) {

  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(appModels)
// 4. Router
app.router(Routes);

// 5. Start
app.start('#root');

//1920 1200