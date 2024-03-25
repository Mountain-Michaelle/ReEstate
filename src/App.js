import './App.css';
import Routes from './Components/Routes/Routes';
import Layout from './HOC/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
