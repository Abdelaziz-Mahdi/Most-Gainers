import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Details from './components/Details';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Nav className="App" />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/:symbol" element={<Details />} />
            <Route path="*" element={<div>Page not found 404!</div>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
