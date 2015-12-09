'use strict';

import {expect} from 'mai-chai';

import {store} from '../store.js';
import '../index.js';

expect (store.root.get ()).to.equal ('Hello');
