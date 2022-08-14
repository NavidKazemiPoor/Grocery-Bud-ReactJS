import {
  IS_EDITING,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  REMOVE_TIME,
} from "./action";

const reducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    return {
      ...state,
      alert: { show: true, msg: "item added", type: "success" },
      list: [...state.list, action.payLoad],
      isEditing: false,
    };
  }
  if (action.type === DELETE_ITEM) {
    const newList = state.list.filter(item=>{
      return item.id !== action.payLoad;
    });

    return {
      ...state,
      list:newList,
      alert: { show: true, msg: "item deleted", type: "danger" },
    };
  }

  if (action.type === REMOVE_TIME) {
    return {
      ...state,
      alert: { show: false, msg: "", type: "" },
    };
  }

  if (action.type === IS_EDITING) {
    return {
      ...state,
      editID:action.payLoad,
      isEditing:true,
      alert: { show: true, msg: "edit mode", type: "info" },
    };
  }

  if (action.type === EDIT_ITEM) {
    const newList = state.list.map(item=>{
      if(item.id==state.editID){
      return {name:action.payLoad};
      }
      return item;
    });
    return {
      ...state,
      editID:action.payLoad,
      list:newList,
      isEditing:false,
      alert: { show: true, msg: "edit successful", type: "success" },
    };
  }

  return state;
};
export default reducer;
