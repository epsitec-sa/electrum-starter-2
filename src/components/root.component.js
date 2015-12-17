'use strict';

import React from 'react';

import {BasicField, BasicList, Label} from 'electrum-arc';
import {Container, PostTitle, PostBody} from '../all.js';

export default class Root extends React.Component {
  render () {
    const listStyle = this.resolveStyle ('listStyle');
    const itemStyle = this.resolveStyle ('itemStyle');
    return (
      <div style={this.styles}>
        <h1>Electrum Starter 2</h1>
        <p>That's it, this is the <b>root</b> component.</p>
        <Label {...this.link ('message')}/>
        <BasicField id='1' {...this.link ('message')}/>
        <hr/>
        <BasicList {...this.link ('posts')} kind='scrollY' styles={listStyle}
          template={state => <li style={itemStyle}>{state.get ('title')}</li>} />
        <hr/>
        <Container {...this.link ()} layoutWidths={[24]}>
          <PostTitle {...this.link ()} num='1.'>Chapitre premier</PostTitle>
          <PostBody {...this.link ()}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum.</PostBody>
        </Container>
      </div>
    );
  }
}
