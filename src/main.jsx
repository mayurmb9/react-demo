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
import House from './components/NestedNavigation/House.jsx'
import Character from './components/NestedNavigation/Character.jsx'
import UserDetail from './components/UserDetail.jsx'
import Redux from './components/Redux/Redux.jsx'
import { Provider } from 'react-redux'
import { store } from './components/Redux/Store.js'
import ReduxToolKit from './components/ReduxToolkit/ReduxToolKit.jsx'
import rtkStore from './components/ReduxToolkit/RTKStore.js'
import Forms from './components/FormValidations/Forms.jsx'
import Login from './components/FormValidations/Login.jsx'
import APIS from './components/API/APIS.jsx'
import FetchApi from './components/API/FetchApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> Redux store */}
    <Provider store={rtkStore}>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" Component={App} />
            <Route path="/convertor" Component={CurrencyConvertor} />
            {/* <Route path="/houses" Component={Houses} >
            <Route index Component={Stark} />
            <Route path="lannister" Component={Lannister} />
            <Route path="targaryen" Component={Targaryen} />
          </Route> */}

            <Route path="/got/houses" element={<Houses />} />
            <Route path="/got/houses/:houseId" element={<House />}>
              <Route path=":characterId" element={<Character />} />
            </Route>


            <Route path="/users/list?" Component={UserList} />

            <Route path="/users/:id/:name?" Component={UserDetail} />

            <Route path="/redux" Component={Redux} />

            <Route path="/reduxtoolkit" Component={ReduxToolKit} />

            <Route path='/forms' Component={Forms}>
              <Route path="login" Component={Login} />
            </Route>

            <Route path='/apis' Component={APIS}>
              <Route index Component={FetchApi} />
              <Route path="fetch" Component={FetchApi} />
            </Route>



            <Route path="/*" Component={PageNotFound} />
            {/* <Route path ="/*" element={<Navigate to="/" />} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
