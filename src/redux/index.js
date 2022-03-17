const { createStore, combineReducers, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");
const { reposReducer } = require("./reposReducer");

const rootReducer = combineReducers({
  repos: reposReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
