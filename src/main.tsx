import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './components/Error.tsx';

import { Header } from './components/Header.tsx';
import Artists from './pages/artists';
import Movies from './pages/movies.tsx';
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
          <Route path="/Films" element={<Movies />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/Artistes" element={<Artists />} />
          <Route path="/movie/:id/:titleMedia" element={<Movies />} />
          <Route path="/tv/:id/:titleMedia?" element={<Series />} />
          <Route path="/person/:id/:titleMedia?" element={<Artists />} />

          <Route path="search/:query" element={<Search />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
