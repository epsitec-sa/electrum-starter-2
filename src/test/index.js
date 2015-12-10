'use strict';

import {expect} from 'mai-chai';

import {BasicField, Label} from 'electrum-arc';

import {store} from '../store.js';
import '../index.js';

expect (store.select ('message').get ()).to.equal ('Hello');
expect (BasicField).to.not.equal (Label);

expect (store.select ('message')).to.have.property ('generation', 2);
expect (store.root).to.have.property ('generation', 2);
