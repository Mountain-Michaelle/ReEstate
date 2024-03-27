import { Route, Routes } from 'react-router-dom';
import './App.css';
import RouteComponents from './Components/RouteComp/RouteComponents';
import Layout from './HOC/Layout';
import ListPage from './Components/RouteComp/ListPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='' element={<RouteComponents />} />
          <Route element={() => 404} />
          <Route path='/listing' element={<ListPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
