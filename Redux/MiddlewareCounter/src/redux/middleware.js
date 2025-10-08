import {increment} from './actions';

export let asyncMiddleware = store => next => action => {
  if (action.type == 'IncrementAsync') {
    setTimeout (() => {
      store.dispatch (increment ());
    }, 2000);
  } else next (action);
};
