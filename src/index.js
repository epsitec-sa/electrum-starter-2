'use strict';

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Electrum from 'electrum';
import {Theme} from 'electrum-theme';
import {BasicField, BasicList, Label} from 'electrum-arc';

import {store} from './store.js';
import {bus} from './bus.js';

class _Root extends React.Component {
  render () {
    return (
      <div>
        <h1>Electrum Starter 2</h1>
        <p>That's it, this is the <b>root</b> component.</p>
        <Label {...this.link ('message')}/>
        <BasicField id='1' {...this.link ('message')}/>
        <hr/>
        <BasicList {...this.link ('posts')} kind='scrollY' styles={{height: 100, width: 200, backgroundColor: '#eeeeee'}}
          template={
            state => <li style={{marginTop: 1, marginBottom: 1, height: 80, backgroundColor: 'white'}}>{state.get ('title')}</li>
          }
        />
      </div>
    );
  }
}

const Root = Electrum.wrap ('Root', _Root);


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
