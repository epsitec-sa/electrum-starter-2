'use strict';

import {Store} from 'electrum-store';

export const store = Store.create ();

store.select ('message').set ('', 'Hello');
store.select ('posts.1').set ('title', 'First post');
store.select ('posts.2').set ('title', 'Second post');
store.select ('posts.3').set ('title', 'Last post');
