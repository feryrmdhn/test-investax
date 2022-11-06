import { combineReducers } from 'redux';
import uploads from './upload';


const rootReducers = combineReducers({
    upload: uploads
})

export default rootReducers;
