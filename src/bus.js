'use strict';

class Bus {
  dispatch (props, message) {
    console.log (`dispatch: ${message}`);
  }

  notify (props, value, ...states) {
    console.log (`notify id=${props.id} value="${value}" states=${JSON.stringify (states)}`);
  }
}

export const bus = new Bus ();
