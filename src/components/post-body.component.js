'use strict';

import React from 'react';

import {ContainerItem} from '../all.js';

export default class PostBody extends React.Component {
  render () {
    return (
      <ContainerItem {...this.link ()}>
        <div/>
        <p>{this.props.children}</p>
      </ContainerItem>
    );
  }
}
