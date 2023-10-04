import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/FilterSlice/FilterSlice';

function Filter() {
  const dispatch = useDispatch();

  const setFilterData = (e) => {
    if (e.currentTarget) {
      const { value } = e.currentTarget;
      const valueLowercase = value.toLowerCase();
      dispatch(setFilterValue(valueLowercase));
    }
  };

  return (
    <div style={{ minWidth: '350px', maxWidth: '500px', gap: '10px', margin: '0 auto' }}>
      <label htmlFor="filter">Filter</label>
      <input
        id="filter"
        type="search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={setFilterData}
      />
    </div>
  );
}

export default React.memo(Filter);
