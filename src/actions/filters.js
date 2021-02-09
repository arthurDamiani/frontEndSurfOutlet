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

export const setFilterGenre = (genre) => ({
  type: 'SET_GENRE_FILTER',
  genre
})

export const removeFilterGenre = (genre) => ({
  type: 'REMOVE_GENRE_FILTER',
  genre
})

export const setFilterSize = (size) => ({
  type: 'SET_SIZE_FILTER',
  size
})

export const removeFilterSize = (size) => ({
  type: 'REMOVE_SIZE_FILTER',
  size
})

export const setFilterPrice = (price) => ({
  type: 'SET_PRICE_FILTER',
  price
})

export const removeFilterPrice = (price) => ({
  type: 'REMOVE_PRICE_FILTER',
  price
})

export const setFilterColor = (color) => ({
  type: 'SET_COLOR_FILTER',
  color
})

export const removeFilterColor = (color) => ({
  type: 'REMOVE_COLOR_FILTER',
  color
})

export const setFilterDepartment = (department) => ({
  type: 'SET_DEPARTMENT_FILTER',
  department
})

export const removeFilterDepartment = (department) => ({
  type: 'REMOVE_DEPARTMENT_FILTER',
  department
})

export const clearFilters = () => ({
  type: 'CLEAR_FILTERS'
})