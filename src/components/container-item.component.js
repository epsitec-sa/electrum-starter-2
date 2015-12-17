'use strict';

import React from 'react';

export default class ContainerItem extends React.Component {
  render () {
    const func = this.props['inject:container-layout'];
    const divStyle = this.styles;
    let index = 0;
    return (
      <div style={divStyle}>{React.Children.map (this.props.children, child => func (index++, child))}</div>
    );
  }
}
