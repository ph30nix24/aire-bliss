import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app.routes'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './features/auth/services/auth.context'
import { ProductProvider } from './features/shop/services/product.context'

const App = () => {
  return (
    <ProductProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </AuthProvider>
    </ProductProvider>
  )
}

export default App