import React from 'react';
import "./SearchResult.css";
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function SearchResult ( { img, location, title, description, star, price, total } ) {
  return (
    <div>
      <div className="searchResult">
        <img src={img} alt="" className="__img" />
        <FavoriteBorderIcon className="__heart" />
        <div className="__info">
          <div className="__infoMain">
            <h4>{location}</h4>
            <h3>{title}</h3>
            <p>____</p>
            <h4>{description}</h4>
            <div className="__infoBottom">
              <div className="__infoBottomLeft">
                <StarRateIcon className="__infoBottomLeftStar" />
                <p>{star}</p>
              </div>
              <div className="__infoBottomRight">
                <p className="__price">{price}</p>
                <p className="__total">{total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SearchResult;
