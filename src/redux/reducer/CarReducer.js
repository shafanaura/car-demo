const CarReducer = (
  state = {
    modalVisible: false,
  },
  action
) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        modalVisible: action.modalVisible,
      };
    default:
      return state;
  }
};

export default CarReducer;
