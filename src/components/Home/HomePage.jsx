import React from "react";
import "./Home.css";
import Nav from "./NavBar/Nav";
import Banner from "./Banner/Banner";
import Row from "./Row/Row";
import requests from "../../API/Requests";

function HomePage() {
    return (
        <div className="home">
            <Nav />
            <Banner />
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
        </div>
    );
}

export default HomePage;
