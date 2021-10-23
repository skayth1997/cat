import { combineReducers } from 'redux';
import categoryReducer from './category';
import imageReducer from './image';


const rootReducer = combineReducers({
  categories: categoryReducer,
  images: imageReducer
});

export default rootReducer;
