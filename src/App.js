import { Route, Routes } from 'react-router-dom';
import './App.css';
import RouteComponents from './Components/RouteComp/RouteComponents';
import Layout from './HOC/Layout';
import ListPage from './Components/RouteComp/ListPage';
import ListDetail from './Components/RouteComp/ListDetail';
import UserDetail from './Components/Data/UserDetail';
import Login from './Components/RouteComp/Login';
import Register from './Components/RouteComp/Register';
import store from './Redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
        <Layout>
          <Routes>
            <Route path='' element={<RouteComponents />} />
            <Route element={() => 404} />
            <Route path='/listing' element={<ListPage />} />
            <Route path='/listing/detail/:slug' element={<ListDetail />} />
            <Route path='/user' element={<UserDetail />} />
            <Route path='/sign-in' element={<Login />} />
            <Route path='/sign-up' element={<Register />} />
          </Routes>
        </Layout>
      </div>
    </Provider>
   
  );
}

export default App;
