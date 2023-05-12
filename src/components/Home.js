import React from 'react';
import './Home.css';
import empanadas from './images/food/empanadas.jpg'
import garnachas from './images/food/garnachas.jpg'
import picaditas from './images/food/picaditas.jpg'
import tacos from './images/food/tacos.jfif'
import tostadas from './images/food/tostadas.jpg'
import { MapContainer, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import Markers from './Markers';
import homeImg from '../components/images/homeImg.png'

const Home = () => {
    return (
    <div className='home' id='home'>
        <div className='container-gallery'>
            <div className='gallery'>
                <img src={empanadas} alt='empanadas'></img>
                <img src={garnachas} alt='garnachas'></img>
                <img src={picaditas} alt='picaditas'></img>
                <img src={tacos} alt='tacos'></img>
                <img src={tostadas} alt='tostadas'></img>
            </div>
        </div>
        <div className='container-map'>
            <div className='map'>
                <MapContainer center= {{lat: '18.854950638559547', lng: '-97.06669076122935'}} zoom={15}>
                    <TileLayer 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution= '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Markers/>
                </MapContainer>
            </div>
        </div>
        <div className='container-img'> 
            <div className='imagen'>
                <img src={homeImg} alt='homeImg'></img>
            </div>
        </div>
    </div>
    )
}

export default Home