import {
  POST_TO_DO_ITEM,
  DELETE_TO_DO_ITEM,
  MARK_TO_DO_ITEM,
  UPDATE_TO_DO_ITEM,
} from "./types";

export const postToDoItem = (item) => ({
  type: POST_TO_DO_ITEM,
  payload: item,
});

export const updateToDoItem = (item) => ({
  type: UPDATE_TO_DO_ITEM,
  payload: item,
});

export const deleteToDoItem = (id) => ({
  type: DELETE_TO_DO_ITEM,
  payload: id,
});

export const markToDoItem = (item) => ({
  type: MARK_TO_DO_ITEM,
  payload: item,
});
