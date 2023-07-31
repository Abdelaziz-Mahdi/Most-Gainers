import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav className="App" />}>
            <Route index element={<Home />} />
            <Route path="details" element={<Details />} />
            <Route path="*" element={<div>Page not found 404!</div>} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
