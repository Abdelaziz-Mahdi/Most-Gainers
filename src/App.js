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
          <Routes>
            <Route path="/" element={<Nav className="App" />}>
              <Route index element={<Home />} />
              <Route path="/:id" element={<Details />} />
              <Route path="*" element={<div>Page not found 404!</div>} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
