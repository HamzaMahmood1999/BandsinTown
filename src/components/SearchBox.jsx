/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';

// const handleKeyDown = (event) => {
//   if (event.key === 'Enter') {
//     props.action;
//     // console.log('do validate');
//   }
// };
const SearchBox = props => (
  <div className="container">
    <div style={{ backgroundColor: '#FFFFFF50' }} className="card">
      <div className="card-content">
        <div className="field has-addons">
          <div className="control is-expanded has-icons-left has-icons-right">
            <input
              className="input is-rounded "
              type="text"
              placeholder="Input the artist or band name..."
              onChange={event => (event.key === 'Enter' ? props.action : props.change)}
            />
            <span className="icon is-small is-right">
              <i className="fas fa-search" />
            </span>
          </div>
          <div className="control has-icons-left has-icons-right">
            <button className="button is-success is-rounded" aria-label="Search Button" onClick={props.action} onKeyPress={event => (event.key === 'Enter' ? props.action : props.change)} >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SearchBox.propTypes = {
  change: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
};

export default SearchBox;
