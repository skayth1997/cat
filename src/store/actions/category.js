import { FETCH_CATEGORIES } from '../../consts/action-types';
import categoryApi from '../../api/category';


const fetchCategories = () => {
  return async (dispatch) => {
    const categories = await categoryApi.fetchAll();

    dispatch({ type: FETCH_CATEGORIES, payload: { categories } });
  };
};

export { fetchCategories };
