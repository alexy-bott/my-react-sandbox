// root.jsx
import * as React from 'react';
import Component from './component';
import store from './store';
export { ClientType } from './dataService';
function Root() { return <Component store={store} />; }
export default Root;
