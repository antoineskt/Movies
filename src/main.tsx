import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './components/Error.tsx';
import Films from './pages/films.tsx';
import { Header } from './components/Header.tsx';
import Artistes from './pages/artistes.tsx';
import Series from './pages/series.tsx';
import Search from './pages/search.tsx';
import { store } from './app/store.tsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<Error />} />
          <Route path="/Films" element={<Films />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/Artistes" element={<Artistes />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
