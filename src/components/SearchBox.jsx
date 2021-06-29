import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = props => (
  <div className="container">
    <div className="card">
      <div className="card-content">
        <div className="field has-addons">
          <div className="control is-expanded ">
            <input
              className="input is-rounded "
              type="text"
              placeholder="Input the artist or band name..."
              onChange={props.change}
            />
            <span className="icon is-small is-right">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className="control has-icons-left has-icons-right">
            <button className="button is-success is-rounded" aria-label="Search Button" onClick={props.action}>
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
