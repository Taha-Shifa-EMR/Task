import { all, fork } from 'redux-saga/effects';

import watchAuthSaga from './watchers/auth';

export default function* root() {
  yield all([fork(watchAuthSaga)]);
}

// Above function tells  telling SAGA to wait for action ‘GET_NEWS’ to get dispatched. 
// And ones ‘GET_NEWS’ was dispathced to call fetchNews function.
// Inside of fetchNews function happens asynchronous call to API and
// when request arrived next action { type: “NEWS_RECEIVED”, json: json.articles, } is dispatched. 
// As you can see we don’t even need to write action “NEWS_RECEIVED” in actions/index.js file because it’s fully described here.

// ES6 GENERATORS like ‘yield’ and ‘*’. 
//We export from this file function rootSaga in which we call function actionWatcher.
