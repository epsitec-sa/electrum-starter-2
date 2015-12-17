'use strict';

import React from 'react';

export default class Container extends React.Component {
  render () {
    const {theme} = this.props;
    const renderChild = child => {
      return React.cloneElement (child, {'inject:container-layout': (index, child) => this.processChild (index, child)});
    };

    const ulStyles = this.styles;

    return (
      <ul style={ulStyles}>
        {React.Children.map (this.props.children, renderChild)}
      </ul>
    );
  }

  processChild (index, child) {
    const layoutWidths = this.props.layoutWidths || [];
    if (index < layoutWidths.length) {
      return React.cloneElement (child, {style: {flex: `0 0 ${layoutWidths[index]}px`}});
    } else {
      return React.cloneElement (child, {style: {flex: '1 1 auto'}});
    }
  }
}
