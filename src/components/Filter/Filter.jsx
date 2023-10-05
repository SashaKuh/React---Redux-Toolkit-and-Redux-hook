import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';
import { FilterForm } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterForm>
      <label htmlFor="find">Find contacts by name:</label>
      <input
        type="text"
        name="find"
        onChange={e => dispatch(setFilterValue(e.target.value.toLowerCase()))}
      />
    </FilterForm>
  );
}

export default React.memo(Filter);
