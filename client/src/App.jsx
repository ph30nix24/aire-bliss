import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app.routes' 
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './features/auth/services/auth.context'

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </AuthProvider>
  )
}

export default App