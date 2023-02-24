import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import SubNav from './Components/Subnav';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SubNav />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;