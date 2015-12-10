'use strict';

class Bus {
  dispatch (props, message) {
    console.log (`dispatch: ${message}`);
  }

  notify (props, value, ...states) {
    const {state} = props;

    console.log (
      `notify ${state.id} ` +
      `value="${value}" ` +
      `gen=${state.generation} ` +
      `states=${JSON.stringify (states)}`);

    if (state.value === value) {
      return;
    }
    state.set ('', value);

    if (this._root) {
      this._root.forceUpdate ();
    }
  }

  attach (root) {
    this._root = root;
  }
}

export const bus = new Bus ();
