const filtersReducerDefaultState = {
  brand: [],
  category: [],
  name: ""
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        name: action.name
      };
    case 'SET_CHECKBOX_FILTER':
      return {
        ...state,
        brand: [...state.brand, action.brand],
        category: [...state.category, action.category]
      }
    case 'REMOVE_CHECKBOX_FILTER':
      return {
        ...state,
        brand: state.brand.filter((brand) => brand !== action.brand),
        category: state.category.filter((category) => category !== action.category), 
      }
    case 'CLEAR_FILTERS':
      return {
        ...state,
        brand: [],
        name: "",
        category: []
      }
    default:
      return state
  }
}

export default filtersReducer;