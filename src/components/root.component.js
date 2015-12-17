'use strict';

import React from 'react';

import {BasicField, BasicList, Label} from 'electrum-arc';
import {Container} from '../all.js';

export default class Root extends React.Component {
  render () {
    const listStyle = this.resolveStyle ('listStyle');
    const itemStyle = this.resolveStyle ('itemStyle');
    return (
      <div>
        <h1>Electrum Starter 2</h1>
        <p>That's it, this is the <b>root</b> component.</p>
        <Label {...this.link ('message')}/>
        <BasicField id='1' {...this.link ('message')}/>
        <hr/>
        <BasicList {...this.link ('posts')} kind='scrollY' styles={listStyle}
          template={state => <li style={itemStyle}>{state.get ('title')}</li>} />
        <hr/>
        <Container {...this.link ()}>
          <h1>Head</h1>
          <p>Paragraph</p>
        </Container>
      </div>
    );
  }
}
