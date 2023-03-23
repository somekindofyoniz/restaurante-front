//Contains all routing system
import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import routes from './routes'
import { map } from 'lodash'

export function Navigation() {
  return (
    //All the navigation must be wrapped in the Router, because is the navigation container
    <BrowserRouter>
          <Routes>
            {map(routes, (infoRoute, index) => (
              <Route
                key={index}
                path={infoRoute.path}
                element={
                  <infoRoute.layout>
                    <infoRoute.component />
                  </infoRoute.layout>
                }
              />
            ))}
          </Routes>
    </BrowserRouter>
  )
}
