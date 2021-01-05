import React from 'react';
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import { Button } from "@material-ui/core";

function SearchPage () {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>7 days ~ 8th Dec to 15th Dec ~ 3 guests </p>
        <h2>Stays Nearby</h2>
        <Button className="buton" variant="outlined">Type of Place</Button>
        <Button className="buton" variant="outlined">Price</Button>
        <Button className="buton" variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More filters</Button>
        <Button variant="outlined">Cancellation Flexibility</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/0481cce7-543d-4efb-b59f-ede5c42430d2.jpg?im_w=960"
        location="Entire house in Mumbai"
        title="Bohemian - Relaxed [Sanitized], 1BHK Studio"
        description="Entire house hosted by The Bombay Home Company 2 guests · 1 bedroom · 1 bed · 1 bathroom"
        star="4.90"
        price="₹1,373 / night"
        total="₹9,611 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/242c4283-7c71-482c-98d7-88c2eddd4726.jpg?im_w=960"
        location="Entire serviced apartment in Mumbai"
        title="Four Bedroom Apt at Bandra, Short/Monthly Stay"
        description="Entire serviced apartment hosted by Shweta 8 guests · 4 bedrooms · 5 beds · 4 bathrooms"
        star="4.00"
        price="₹4388 / night"
        total="₹30,716 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/18f93f60-4ee1-493c-abb3-9db1d02ecde5.jpg?im_w=720"
        location="Hotel room in Mumbai"
        title="Superior Luxury room in Heritage Boutique Hotel"
        description="Room in boutique hotel hosted by Nobert 2 guests · 1 bedroom · 1 bed · 1 bathroom"
        star="4.30"
        price="₹3,791 / night"
        total="₹26,537 total"
      />
    </div>
  );
}

export default SearchPage;
