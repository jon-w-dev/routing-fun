import { createBrowserRouter } from 'react-router-dom'

import Root from './Root'
import ContactPage from '../components/ContactPage'
import AboutPage from '../components/AboutPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
])

export default router
