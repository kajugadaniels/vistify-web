import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

const AppLayout = () => {
    return (
        <div>
            <Header />
            <section className="product-grids section">
                <div className="container">
                    <Outlet />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AppLayout