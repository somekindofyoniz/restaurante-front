import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Button } from 'semantic-ui-react'
import { Navigation } from './routes'
import { AuthProvider } from './context'

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
      <ToastContainer 
        position='bottom-center'
        autoClose={3000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover={false}
        draggable
      />
    </AuthProvider> 
  )
}
