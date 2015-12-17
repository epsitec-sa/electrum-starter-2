'use strict';

import {expect} from 'mai-chai';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import {Theme} from 'electrum-theme';
import {BasicField, Label} from 'electrum-arc';

import {store} from '../store.js';
import '../index.js';

import {Root} from '../all.js';

expect (store.select ('message').get ()).to.equal ('Hello');
expect (BasicField).to.not.equal (Label);

expect (store.select ('message')).to.have.property ('generation', 2);
expect (store.root).to.have.property ('generation', 8);

const theme = Theme.create ('default');

const html = ReactDOMServer.renderToStaticMarkup (<Root theme={theme} state={store.root}/>);

console.log (html);
