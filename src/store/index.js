import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

const middleware = [thunk]

const Store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )

)
export default Store;
