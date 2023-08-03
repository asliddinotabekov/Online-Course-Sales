import React from 'react'
import { Map, Placemark, YMaps } from 'react-yandex-maps'

const Yandex = () => {
    const mapStyle = {
        position: "relative",
        left: 0,
        top: 0,
        width: "100wh",
        height: "50vh",
        overflow: "hidden",
      };
  return (
    <YMaps
    query={{ apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b", lang: "EN" }}>
        <Map style={mapStyle} defaultState={{ center: [41.3111,69.2797], zoom: 12 }}>
            <Placemark geometry={[41.3111,69.2797]}/>
        </Map>
    </YMaps>
  )
}

export default Yandex
