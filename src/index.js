import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import ErrorPage from './ErrorPage'

import Home from './containers/Home'
import Wordle from './games/Wordle'

const appElement = document.getElementById('app')
const root = createRoot(appElement)

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'wordle',
                element: <Wordle />
            }
        ]
    }
])

root.render(<RouterProvider router={router} />);