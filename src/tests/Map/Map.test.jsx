import Map from '../../components/Map/index'
import { it, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MapPage from '../../pages/MapPage'

/*
MapPage passes props down to Map

searchCoordinates
    {
        lat: 51.509865,
        lng: -0.118092,
    }

setSearchCoordinates
updates the current lat and lng

Radius = 10

setRadius
Updates the radius
*/

/*
export default function Map({
    children,
    searchCoordinates,
    setSearchCoordinates,
    radius,
    setRadius,
})
*/


it("should have an element with an id of map", () => {
  let searchCoordinates = { lat: 51.509865, lng: -0.118092}
  


})