import React from 'react';
import { FETCH_POSTS } from '../actions/index.js';

const INITIAL_STATE = { all: [], post: null };

export default function (state = INITIAL_STATE, action = null) {
  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };

    default:
      return state;
  }
}

