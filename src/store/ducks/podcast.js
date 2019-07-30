import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**
 *
 * Actions Types &  Creators
 */

const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ["data"],
  loadFailure: null
});

export const PodcastsTypes = Types;

export default Creators;

/**
 * Initial_State
 */

export const INITIAL_STATE = Immutable({
  data: []
});

/**
 * Reducers
 */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data })
});
