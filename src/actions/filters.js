export const setTextFilter = (name) => ({
  type: 'SET_TEXT_FILTER',
  name
})

export const setFilterBrand = (brand) => ({
  type: 'SET_BRAND_FILTER',
  brand
})

export const removeFilterBrand = (brand) => ({
  type: 'REMOVE_BRAND_FILTER',
  brand
})

export const setFilterCategory = (category) => ({
  type: 'SET_CATEGORY_FILTER',
  category
})

export const removeFilterCategory = (category) => ({
  type: 'REMOVE_CATEGORY_FILTER',
  category
})

export const clearFilters = () => ({
  type: 'CLEAR_FILTERS'
})