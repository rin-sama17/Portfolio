import React  from 'react';
import { createRoot } from 'react-dom/client';
import AppContiner from './continers/AppContiner';
import "./index.css"

const root = createRoot(document.getElementById('root'));
root.render(
  <AppContiner />
);
