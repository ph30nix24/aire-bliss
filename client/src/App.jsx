import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app.routes'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './features/auth/services/auth.context'
import { ProductProvider } from './features/shop/services/product.context'
import { UserProvider } from './features/users/services/user.context'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <ProductProvider>
      <AuthProvider>
        <UserProvider>
          <ScrollToTop />
          <RouterProvider router={router} />
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </UserProvider>
      </AuthProvider>
    </ProductProvider>
  )
}

export default App