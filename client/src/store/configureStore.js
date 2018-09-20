import {createStore, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory';
import creatSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import Sagas from '../sagas';

const initialState = {
    user: {
        loading: false,
        userId: null, // after authorisation storing user id
        name: '', // after authorisation storing user's name
        error: '',
    },
    // posts: {
    //     loading: false,
    //     data: [],
    //     erorr: '',
    // }
};

const history = createHistory();
const sagaMiddleware = creatSagaMiddleware();

const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    initialState, 
    composeEnhancers(middleware),
);

sagaMiddleware.run(Sagas);

export { store, history };
