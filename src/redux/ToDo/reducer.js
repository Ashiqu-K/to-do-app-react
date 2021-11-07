import {
  POST_TO_DO_ITEM,
  DELETE_TO_DO_ITEM,
  MARK_TO_DO_ITEM,
  UPDATE_TO_DO_ITEM,
} from "./types";

const initialState = {
  /* Mock data */
  toDoList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_TO_DO_ITEM:
      return {
        ...state,
        toDoList: [...state.toDoList, action.payload],
      };

    case DELETE_TO_DO_ITEM: {
      const toDoItems = [...state.toDoList];
      const index = toDoItems.findIndex((item) => item.id === action.payload);
      const removedItem = toDoItems.splice(index, 1);

      return {
        ...state,
        toDoList: [...toDoItems],
      };
    }

    case MARK_TO_DO_ITEM: {
      const toDoItems = [...state.toDoList];
      const index = toDoItems.findIndex(
        (item) => item.id === action.payload.id
      );
      toDoItems.splice(index, 1, action.payload);
      return {
        ...state,
        toDoList: [...toDoItems],
      };
    }

    case UPDATE_TO_DO_ITEM: {
      const toDoItems = [...state.toDoList];
      const index = toDoItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = toDoItems.splice(index, 1, action.payload);
      return {
        ...state,
        toDoList: [...toDoItems],
      };
    }

    default:
      return state;
  }
};

export default reducer;
