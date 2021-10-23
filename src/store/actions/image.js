import { SET_IMAGES } from '../../consts/action-types';
import imagesApi from '../../api/image';


const fetchImages = ({ page, categoryId, currentImages }) => {
  return async (dispatch) => {
    const response = await imagesApi.fetchAll({ page, categoryId });
    const images = page === 1 ? response : response.concat(currentImages);

    dispatch({ type: SET_IMAGES, payload: { images } });
  };
};


export { fetchImages };
