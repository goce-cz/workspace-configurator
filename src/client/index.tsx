import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router5'

import '../styles/style.scss'
import { App } from './components/App'
import { router } from './setup/routes'

router.start()

ReactDOM.render(
  <RouterProvider router={router}>
    <App/>
  </RouterProvider>,
  document.getElementById('root')
)
