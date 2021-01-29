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
      }
    case 'SET_BRAND_FILTER':
      return {
        ...state,
        brand: [...state.brand, action.brand]
      }
    case 'SET_CATEGORY_FILTER':
      return {
        ...state,
        category: [...state.category, action.category]
      }
    case 'REMOVE_BRAND_FILTER':
      return {
        ...state,
        brand: state.brand.filter((brand) => brand !== action.brand)
      }
    case 'REMOVE_CATEGORY_FILTER':
      return {
        ...state,
        category: state.category.filter((category) => category !== action.category)
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