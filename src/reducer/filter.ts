interface State {
  make: string;
  model: string;
  year: string;
  fuel: string;
  limit: string;
}

interface FilterAction {
  type: string;
  payload: string[];
}

export const FilterReducer = (state: State, action: FilterAction) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, make: action.payload[0], model: action.payload[1] };
    case "FUEL":
      // console.log(action.payload);
      return { ...state, fuel: action.payload[0] };
    case "YEAR":
      // console.log(action.payload);
      return { ...state, year: action.payload[0] };
    case "LIMIT":
      // console.log(action.payload);
      return { ...state, limit: action.payload[0] };
    default:
      return state;
  }
};
