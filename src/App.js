import { Route, Routes } from 'react-router-dom';
import './App.css';
import RouteComponents from './Components/RouteComp/RouteComponents';
import Layout from './HOC/Layout';
import ListPage from './Components/RouteComp/ListPage';
import ListDetail from './Components/RouteComp/ListDetail';
import UserDetail from './Components/Data/UserDetail';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='' element={<RouteComponents />} />
          <Route element={() => 404} />
          <Route path='/listing' element={<ListPage />} />
          <Route path='/listing/detail/:slug' element={<ListDetail />} />
          <Route path='/user' element={<UserDetail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
