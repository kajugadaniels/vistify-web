import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import { Explore, NotFound, PlaceDetails, PlaceFoodMenu } from './pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<Explore />} />
                <Route path="/place/:id/" element={<PlaceDetails />} />
                <Route path="/place/:id/menu/" element={<PlaceFoodMenu />} />
            </Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes
