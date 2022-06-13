import React from 'react';
import { Route, Routes } from 'react-router-dom';

import appRoutes from './routes';
import Header from '../layout/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        {Object.entries(appRoutes).map(([key, { path, title, description, requireLogin, Page }]) => (
          <Route
            key={key}
            path={path}
            element = {<Page />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;