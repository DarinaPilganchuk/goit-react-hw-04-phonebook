import React from 'react'
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, changeFilterInput }) => ( 
    <input className={styles.filter}
      type="text"
      name="filter"
      value={filter}
      onChange={changeFilterInput}
      placeholder="Enter name for Search"
    />
)

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};

export default Filter;