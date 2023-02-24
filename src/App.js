import './App.css';
import Footer from './Components/Footer';
import Homeeight from './Components/Homeeight';
import Homefive from './Components/Homefive';
import Homefour from './Components/Homefour';
import HomeNav from './Components/Homenav';
import Homeone from './Components/Homeone';
import Homeseven from './Components/Homeseven';
import Homesix from './Components/Homesix';
import Homethree from './Components/Homethree';
import Hometwo from './Components/Hometwo';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeNav />
      <Homeone />
      <Hometwo />
      <Homethree />
      <Homefour />
      <Homefive />
      <Homesix />
      <Homeseven />
      <Homeeight />
      <Footer />
    </div>
  );
}

export default App;