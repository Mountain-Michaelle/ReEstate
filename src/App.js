import {BrowserRouter} from 'react-router-dom';
import './App.css';
import RouteComponents from './Components/RouteComp/RouteComponents';
import Layout from './HOC/Layout';
import store from './Redux/store';
import { Provider } from 'react-redux';

function App() {

  return (
  <BrowserRouter>
    <Provider store={store}>
        <div className="App">
        <Layout>
          <RouteComponents />
        </Layout>
      </div>
    </Provider>
  </BrowserRouter>
   
  );
}

export default App