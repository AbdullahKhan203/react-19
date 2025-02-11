import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'


const MainLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout




// Outlet: Renders the nested route component (e.g., Home, FetchOld, or FetchRQ) based on the current URL
// The Outlet component renders the appropriate nested route component (Home, FetchOld, or FetchRQ) based on the URL
// This structure ensures that the Header and Footer are consistent across all pages, while the content in between (Outlet) changes dynamically based on the route


// Key Features
// Reusable Layout: The MainLayout component encapsulates the common structure (header and footer) shared across all pages.

// Dynamic Content: The Outlet component dynamically renders the appropriate page content based on the route.

// Separation of Concerns: The layout is separated from the page content, making the code more modular and easier to maintain.

