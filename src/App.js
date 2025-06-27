import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import Page404 from './components/Page404/Page404';
import { Routes, Route } from 'react-router-dom';
import List from './components/List/List';
const App = () => {
  return (
    <section>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/list/:listId" element={<List />} />
        </Routes>
      </Container>
    </section>
  );
};

export default App;
