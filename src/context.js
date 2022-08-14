import React, { useContext, useReducer } from "react";
import reducer from "./reducer.js";

import {
  IS_EDITING,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  REMOVE_TIME,
} from "./action";

const initialState = {
  alert: { show: false, msg: "", type: "" },
  list: [],
  isEditing: false,
  editID: "",
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (text) => {
    if (text) {
      console.log(true);
      const newItem = { name: text, id: new Date().getTime().toString() };
      dispatch({ type: ADD_ITEM, payLoad: newItem });
    }
  };
  const removeTime = () => {
    dispatch({ type: REMOVE_TIME });
  };
  const deleteFunc = (id) => {
    dispatch({ type: DELETE_ITEM, payLoad: id });
  };
  const isEditFunc = (id) => {
    dispatch({ type: IS_EDITING, payLoad: id });
  };
  const editFunc = (name, id) => {
    dispatch({ type: EDIT_ITEM, payLoad: name });
  };
  return (
    <AppContext.Provider
      value={{
        addItem,
        ...state,
        removeTime,
        deleteFunc,
        isEditFunc,
        editFunc,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
