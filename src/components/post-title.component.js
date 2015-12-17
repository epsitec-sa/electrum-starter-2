'use strict';

import React from 'react';

import {ContainerItem} from '../all.js';

export default class PostTitle extends React.Component {
  render () {
    const styles = this.styles[0];
    console.log (styles);
    return (
      <ContainerItem {...this.link ()} styles={styles}>
        <span>{this.props.num}</span>
        <span>{this.props.children}</span>
      </ContainerItem>
    );
  }
}
