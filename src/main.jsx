import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import User from './Components/User'
import Github, { githubinfo } from './Components/Github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'Home',
//         element: <Home />
//       },
//       {
//         path: 'Header',
//         element: <Header />
//       },
//       {
//         path: 'Footer',
//         element: <Footer />
//       },
//       {
//         path: 'Contact',
//         element: <Contact />
//       },
//       {
//         path: 'About',
//         element: <About />
//       }

//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='About' element={<About />} />
      <Route path='Home' element={<Home />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='' element={<Home />} />
      <Route path='Header' element={<Header />} />
      <Route path='Footer' element={<Footer />} />
      <Route path='User/:userid' element={<User />} />
      <Route
        loader={githubinfo}
        path='Github'
        element={<Github />}
      />

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
