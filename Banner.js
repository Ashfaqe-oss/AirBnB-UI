import React, { useState } from 'react';
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner () {
  const [search, setSearch] = useState( false );
  const [hide, setHide] = useState( true );
  const history = useHistory();

  return (
    <div className="banner">
      <div className="banner__search">

        <Button className="banner__searchButton" variant="outlined" onClick={() => { setSearch( !search ); setHide( !hide ); }}>{hide ? "Search Dates" : "hide"}</Button>
        {search && <Search />}
      </div>

      <div className="banner__info">
        <h1>Go Near</h1>
        <h4>stretch your Imagination</h4>
        <Button variant="outlined" onClick={() => history.push( "/search" )}>Explore nearby stays</Button>
      </div>
    </div>
  );
}

export default Banner;