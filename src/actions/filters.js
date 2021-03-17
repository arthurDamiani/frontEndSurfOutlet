export const setTextFilter = (name) => ({
  type: 'SET_TEXT_FILTER',
  name
})

export const setFilterSize = (size) => ({
  type: 'SET_SIZE_FILTER',
  size
})

export const removeFilterSize = (size) => ({
  type: 'REMOVE_SIZE_FILTER',
  size
})

export const setFilterColor = (color) => ({
  type: 'SET_COLOR_FILTER',
  color
})

export const removeFilterColor = (color) => ({
  type: 'REMOVE_COLOR_FILTER',
  color
})

export const clearFilters = () => ({
  type: 'CLEAR_FILTERS'
})