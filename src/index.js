'use strict';

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {Theme} from 'electrum-theme';
import {Label} from 'electrum-arc';

import {store} from './store.js';

const theme = Theme.create ('default');

ReactDOM.render (
  <div>
    <h1>Electrum</h1>
    <p>That's it, this is the <b>root</b> component.</p>
    <Label state={store.root} theme={theme}/>
  </div>,
  document.getElementById ('root')
);
