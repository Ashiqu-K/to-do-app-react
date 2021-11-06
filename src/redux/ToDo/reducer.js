import {
  POST_TO_DO_ITEM,
  DELETE_TO_DO_ITEM,
  MARK_TO_DO_ITEM,
  UPDATE_TO_DO_ITEM,
} from "./types";

const initialState = {
  /* Mock data */
  toDoList: [
    {
      id: 1001,
      message: "Create a new github repository for To-Do app.",
      isCompleted: true,
    },
    {
      id: 1002,
      message: "Complete initial setup for the To-Do app using React.",
      isCompleted: true,
    },
    {
      id: 1003,
      message: "Create routes for Task list, create and edit pages.",
      isCompleted: true,
    },
    {
      id: 1004,
      message:
        "Implement task list page with features for delete and strike/complete a task.",
      isCompleted: false,
    },
    {
      id: 1005,
      message: "Implement Create/Edit page for a Task.",
      isCompleted: false,
    },

    {
      id: 1006,
      message: "Commit and push the code in Github.",
      isCompleted: false,
    },
  ],
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
