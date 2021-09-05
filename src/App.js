import React from "react";
import "./App.css";
import Row from "./components/rows/Row";
import requests from "./requests";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Recommended"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow
      ></Row>

      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fethComedyMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticSeries}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
