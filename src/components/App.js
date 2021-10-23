import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Welcome from './templates/Welcome';
import '../styles/bootstrap.min.css';
import '../styles/index.scss';
import '../styles/index.scss';


const App = () => (
  <StrictMode>
    <Provider store={store}>
      <div id="app">
        <Welcome/>
      </div>
    </Provider>
  </StrictMode>
);

export default App;
