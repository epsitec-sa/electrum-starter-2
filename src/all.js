'use strict';
import Electrum from 'electrum';
import _Container from './components/container.component.js';
import _Container$styles from './components/container.styles.js';
import _Root from './components/root.component.js';
import _Root$styles from './components/root.styles.js';
export const Container = Electrum.wrap ('Container', _Container, {styles: _Container$styles});
export const Root = Electrum.wrap ('Root', _Root, {styles: _Root$styles});
