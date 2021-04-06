import React from 'react'
import "./HomeScreen.css"
import Nav from "./Nav"
import Banner from "./Banner"
import Row from "./Row"
import requests from "./requests"

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row
              title = 'NETFLIX ORIGINALS'
              fetchUrl = {requests.fetchNeflixOriginals}
              isLargeRow
            />
            <Row 
            title = 'TRENDING'
            fetchUrl = {requests.fetchTrending}
            />
            <Row 
              title = 'TOP RATED'
              fetchUrl = {requests.fetchTopRated}
            />
            <Row
              title = 'ACTION MOVIES'
              fetchUrl = {requests.fetchActionMovies}
            />
            <Row
              title = 'COMEDY MOVIES'
              fetchUrl = {requests.fetchComedyMovies}
            />
            <Row
              title = 'HORROR MOVIES'
              fetchUrl = {requests.fetchHorrorMovies}
            />
            <Row
              title = 'ROMANTIC MOVIES'
              fetchUrl = {requests.fetchRomanceMovies}
            />
            <Row
              title = 'DOCUMENTARIES'
              fetchUrl = {requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen
