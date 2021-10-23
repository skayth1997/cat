import { SET_IMAGES } from '../../consts/action-types';


const imageReducer = (state = [], action) => {
  switch (action.type) {
    case SET_IMAGES:
      return [...action.payload.images];
    default:
      return state;
  }
};

export default imageReducer;
