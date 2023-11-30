
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer';
import About from './components/About.js';

function App() {
 
  return (
    <div id="main-div" class="flex flex-col h-screen justify-between ">
      <Header/>

      <Home/>
      
      
      
      <About/>
      
      <Footer/>
    </div>


  );
}

export default App;
