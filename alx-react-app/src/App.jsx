import WelcomeMessage from './components/WelcomeMessage'
import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
function App() {
  return(
    <div>
       <WelcomeMessage />
       <Header />, <MainContent />, <Footer />
    </div>
   
  );
}

export default App
