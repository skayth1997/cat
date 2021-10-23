import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCategories } from '../../store/actions/category';
import { selectCategories } from '../../store/selectors/category';
import { fetchImages } from '../../store/actions/image';
import { selectImages } from '../../store/selectors/image';
import Button from '../elements/Button';


const Welcome = ({ fetchCategories, fetchImages, categories, images }) => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState({
    id: '',
    name: ''
  });

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    const props = {
      page,
      categoryId: selectedCategory.id,
      currentImages: images
    };

    fetchImages(props);
  }, [fetchImages, selectedCategory, page]);

  const handleCategoryChange = (category) => {
    setPage(1);
    setSelectedCategory(category);
  };

  const handlePageChange = () => {
    setPage(page + 1);
  };

  return (
    <div className="container-fluid p-5">
      <div className="row">
        <ul className="list-group col-2">
          <h3>Select category</h3>
          {categories.map(category =>
            <li
              key={category.id}
              className={`list-group-item cursor-pointer${selectedCategory.id === category.id ? ' active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category.name}
            </li>
          )}
        </ul>

        <div className="col-8 row m-auto">
          {images.map(image => (
            <div className="card col-3 p-3 image-wrapper" key={image.id}>
              <img className="card-img-top w-100 h-100 cover-fit" src={image.url} alt=""/>
            </div>
          ))}
        </div>

        <div className="col-10 offset-2 text-center mt-4">
          <Button onClick={handlePageChange}>More images</Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: selectCategories(state),
  images: selectImages(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchImages: (props) => dispatch(fetchImages(props))
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
