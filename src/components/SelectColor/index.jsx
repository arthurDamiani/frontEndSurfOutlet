import React from 'react'
import chroma from 'chroma-js'

import Select from 'react-select'

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
})

export const colourOptions = [
    { value: 'blue', label: 'Azul', color: '#0052CC' },
    { value: 'purple', label: 'Roxo', color: '#5243AA' },
    { value: 'red', label: 'Vermelho', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Laranja', color: '#FF8B00' },
    { value: 'yellow', label: 'Amarelo', color: '#FFC400' },
    { value: 'green', label: 'Verde', color: '#36B37E' },
    { value: 'silver', label: 'White', color: '#c2c2c2', isDisabled: true},
  ]

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white', width: '200px' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

const SelectColor = () => (
  <Select
    label="Single select"
    options={colourOptions}
    styles={colourStyles}
    placeholder='Selecione a cor'
  />
)

export default SelectColor