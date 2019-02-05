import React from 'react';
import { Route } from 'react-router-dom';
import { AppNav } from '../components/navbar';
import { PianoSceneContainer } from './piano/piano-scene-container';

export const Layout = () => {
  return (
    <div className="layout">
      <div className="content">
        <div className="container">
          <AppNav />
        </div>
        <div className="container mt-3">
          <Route exact path="/" component={PianoSceneContainer} />
          {/* other routes go here */}
        </div>
      </div>
      <footer className="footer">
        Fork on <a href="https://github.com/camray/webapi-playground">GitHub</a>
      </footer>
    </div>
  );
};
