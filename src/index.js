import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App'
import Greeting from './components/Greeting/Greeting';
import Text from './components/TodoList/TodoList';
import reportWebVitals from './reportWebVitals';
import Scene from '../src/components/Scene/Scene';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Scene />
);

