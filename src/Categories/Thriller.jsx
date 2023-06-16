import React from "react";
import Footer from "../../src/Footer";
import Cards from "../Card";
import '../../src/index.css';
import movies from '../../src/movies.json';

import Navbar from "../Navbar";

function Thriller()
{ 
 
  return(
    <>
    <Navbar/>
    <div className="main-container">
   {movies.thriller.map((item, index) => {
        return (
        <>

        <div className="container1">
          <Cards key={index} name={item.name} company={item.company} image={item.poster} year={item.release} description={item.description} plot={item.plot}/></div>
          </>
        ) ;
      })}
      </div>
      <Footer/>
    </>
  )
}
export default Thriller;