
import './App.css';
import { Header } from "./components/header";
import { Footer } from './components/footer';
import { Content } from './components/content/content';


function App() {
  return ( 
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>

  );
}

export default App;
