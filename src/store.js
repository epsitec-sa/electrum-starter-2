'use strict';

import {Store} from 'electrum-store';

export const store = Store.create ();

store.root.set ('', 'Hello');
