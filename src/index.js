'use strict';

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Electrum from 'electrum';
import {Theme} from 'electrum-theme';

import {store} from './store.js';
import {bus} from './bus.js';

import {Root} from './all.js';

Electrum.reset ();
Electrum.useBus (bus);
Electrum.configureLog ('shouldComponentUpdate',
  function (component, nextProps, nextState, result) {
    console.log (`shouldComponentUpdate=${result} on <${component.constructor.displayName}>, path="${component.props.state.id}"`);
  });

const theme = Theme.create ('default');

class AppHost extends React.Component {
  constructor (props) {
    super (props);
    bus.attach (this);
  }
  render () {
    const {store, theme} = this.props;
    return <Root state={store.root} theme={theme}/>;
  }
}


ReactDOM.render (
  <AppHost store={store} theme={theme}/>,
  document.getElementById ('root')
);
