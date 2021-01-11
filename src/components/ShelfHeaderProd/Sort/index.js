import React from 'react';
 
import { connect } from 'react-redux';
import { updateSort } from '../../../services/sort/actions';
import Selectbox from '../../Selectbox';

const sortBy = [
  { value: '', label: 'Selecione' },
  { value: 'lowestprice', label: 'Menor para maior' },
  { value: 'highestprice', label: 'Maior para menor' }
];

const Sort = ({ updateSort, sort }) => (
  <div className="sort">
    Ordenar por
    <Selectbox options={sortBy} handleOnChange={value => updateSort(value)} />
  </div>
);


const mapStateToProps = state => ({
  sort: state.sort.type
})

export default connect(
  mapStateToProps,
  { updateSort }
)(Sort);
