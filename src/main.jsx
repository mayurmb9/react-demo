import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import App from './App.jsx'
import CurrencyConvertor from './components/CurrencyConvertor/CurrencyConvertor.jsx'
import Router from './components/Router.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'
import './index.css'
import Header from './components/Header.jsx'
import JSX from './components/JSX.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import Houses from './components/NestedNavigation/Houses.jsx'
import Stark from './components/NestedNavigation/Stark.jsx'
import Lannister from './components/NestedNavigation/Lannister.jsx'
import Targaryen from './components/NestedNavigation/Targaryen.jsx'
import UserList from './components/UserList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/convertor" Component={CurrencyConvertor} />
          <Route path="/houses" Component={Houses} >
            <Route index Component={Stark} />
            <Route path="lannister" Component={Lannister} />
            <Route path="targaryen" Component={Targaryen} />
          </Route>

          <Route path="/users" Component={UserList} />

          <Route path="/*" Component={PageNotFound} />
          {/* <Route path ="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
