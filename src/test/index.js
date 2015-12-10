'use strict';

import {expect} from 'mai-chai';

import {BasicField, Label} from 'electrum-arc';

import {store} from '../store.js';
import '../index.js';

expect (store.root.get ()).to.equal ('Hello');
expect (BasicField).to.not.equal (Label);
