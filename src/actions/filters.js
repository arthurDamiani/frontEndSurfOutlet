export const setTextFilter = (name) => ({
  type: 'SET_TEXT_FILTER',
  name
})

export const setCheckboxFilterBrand = (brand) => ({
  type: 'SET_CHECKBOX_FILTER',
  brand
})

export const removeCheckboxFilterBrand = (brand) => ({
  type: 'REMOVE_CHECKBOX_FILTER',
  brand
})

export const setCheckboxFilterCategory = (category) => ({
  type: 'SET_CHECKBOX_FILTER',
  category
})

export const removeCheckboxFilterCategory = (category) => ({
  type: 'REMOVE_CHECKBOX_FILTER',
  category
})

export const clearFilters = () => ({
  type: 'CLEAR_FILTERS'
})