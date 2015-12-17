'use strict';

import React from 'react';

export default class Container extends React.Component {
  render () {
    const {theme} = this.props;

    function renderChild (child) {
      return child;
    }

    return (
      <ul styles={theme.styles.resetList}>
        {React.Children.map (this.props.children, renderChild)}
      </ul>
    );
  }
}
