import { combineReducers } from "redux";

import { reducer as podcasts } from "./podcast";
import { reducer as player } from "./player";

export default combineReducers({
  podcasts,
  player
});
