'use strict';

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Electrum from 'electrum';
import {Theme} from 'electrum-theme';
import {BasicField, Label} from 'electrum-arc';

import {store} from './store.js';
import {bus} from './bus.js';

Electrum.reset ();
Electrum.useBus (bus);

const theme = Theme.create ('default');

class _Root extends React.Component {
  render () {
    return (
      <div>
        <h1>Electrum Starter 2</h1>
        <p>That's it, this is the <b>root</b> component.</p>
        <Label {...this.link ('message')}/>
        <BasicField id='1' {...this.link ('message')}/>
      </div>
    );
  }
}

const Root = Electrum.wrap ('Root', _Root);

const scu = Root.prototype.shouldComponentUpdate;
Root.prototype.shouldComponentUpdate = function (nextProps, nextState) {
  const result = scu.call (this, nextProps, nextState);
  console.log (`shouldComponentUpdate=${result} on <${this.constructor.displayName}>, path="${this.props.state.id}"`);
  return result;
};

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
