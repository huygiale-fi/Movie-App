import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducer/authReducer";
import movieReducer from "./reducer/movieReducer";
import showtimeReducer from "./reducer/showtimeReducer";
import theaterReducer from "./reducer/theaterReducer";


const rootReducer = combineReducers({
    movieReducer: movieReducer,
    authReducer: authReducer,
    showtimeReducer: showtimeReducer,
    theaterReducer: theaterReducer,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
