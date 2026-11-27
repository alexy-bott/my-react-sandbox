// root.jsx
import * as React from 'react';
import Component from './component';
import store from './store';
export const ClientType = { 'company': 'company', 'person': 'person' };
function Root() { return <Component store={store} />; }
export default Root;

