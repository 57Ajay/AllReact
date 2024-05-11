import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Box from './components/Box/Box.jsx'
import UserDetailsRenderer from './components/UserDetails/UserDetailsRenderer.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  //   children: [{
  //     path: 'user-details',
  //     element:
  //     <Box className="user-details">
  //       <UserDetailsRenderer />
  //     </Box>
  // }] To render user-details separately
  },
  { preventDefault: true,
    path:'user-details',
    element: <Box className="user-details">
    <UserDetailsRenderer />
  </Box>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
