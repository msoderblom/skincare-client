import { combineReducers } from "redux";
import { userReducer } from "./user";
import { appReducer } from "./app";
import forumReducers from "./forum/reducers";
import blogReducers from "./blog/reducers";
import { skinfluencersReducer } from "./skinfluencers";
import { kBeautyReducer } from "./k-beauty";

export default combineReducers({
  user: userReducer,
  blog: blogReducers,
  forum: forumReducers,
  skinfluencers: skinfluencersReducer,
  kBeauty: kBeautyReducer,
  app: appReducer,
});
