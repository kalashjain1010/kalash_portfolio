import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Layout from './components/Layout';
import Content from './components/Content';
import Works from './components/Works';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Social from './components/Social';
import './customScrollbar.css'; // Add this line to import the customScrollbar.css

// import Layout from './Layout';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Content/>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Contact/>
        <Social/>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
