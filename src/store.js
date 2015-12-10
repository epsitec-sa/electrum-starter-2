'use strict';

import {Store} from 'electrum-store';

export const store = Store.create ();

store.select ('message').set ('', 'Hello');
