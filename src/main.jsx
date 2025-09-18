import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'

import './App.css'
import './index.css'

import rtkStore from './components/ReduxToolkit/RTKStore.js'
import { ThemeProvider } from './components/ThemeContext.jsx'


const App = lazy(() => import('./App.jsx'));
const APIS = lazy(() => import('./components/API/APIS.jsx'));
const Header = lazy(() => import('./components/Header.jsx'));
const Redux = lazy(() => import('./components/Redux/Redux.jsx'));
const UserList = lazy(() => import('./components/UserList.jsx'));
const AxiosApi = lazy(() => import('./components/API/AxiosApi.jsx'));
const FetchApi = lazy(() => import('./components/API/FetchApi.jsx'));
const UserDetail = lazy(() => import('./components/UserDetail.jsx'));
const PageNotFound = lazy(() => import('./components/PageNotFound.jsx'));
const Forms = lazy(() => import('./components/FormValidations/Forms.jsx'));
const Login = lazy(() => import('./components/FormValidations/Login.jsx'));
const House = lazy(() => import('./components/NestedNavigation/House.jsx'));
const ModularAxios = lazy(() => import('./components/API/ModularAxios.jsx'));
const Houses = lazy(() => import('./components/NestedNavigation/Houses.jsx'));
const CustomPromise = lazy(() => import('./components/API/CustomPromise.jsx'));
const ErrorBoundaries = lazy(() => import('./components/API/ErrorBoundaries.jsx'));
const Character = lazy(() => import('./components/NestedNavigation/Character.jsx'));
const ReduxToolKit = lazy(() => import('./components/ReduxToolkit/ReduxToolKit.jsx'));
const Performance = lazy(() => import('./components/PerformanceOptimization/Performance.jsx'));
const UseMemoHook = lazy(() => import('./components/PerformanceOptimization/UseMemoHook.jsx'));
const DerivedState = lazy(() => import('./components/PerformanceOptimization/DerivedState.jsx'));
const PureComponent = lazy(() => import('./components/PerformanceOptimization/PureComponent.jsx'));
const CurrencyConvertor = lazy(() => import('./components/CurrencyConvertor/CurrencyConvertor.jsx'));
const UseCallBackHook = lazy(() => import('./components/PerformanceOptimization/UseCallBackHook.jsx'));


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> Redux store */}
    <Provider store={rtkStore}>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
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
                <Route path="axios" Component={AxiosApi} />
                <Route path="modular-axios" Component={ModularAxios} />
                <Route path="promise" Component={CustomPromise} />
              </Route>

              <Route path='/error-boundary' Component={ErrorBoundaries} />

              <Route path='/performance' Component={Performance} >
                <Route index Component={PureComponent} />
                <Route path="derived" Component={DerivedState} />
                <Route path="usememo" Component={UseMemoHook} />
                <Route path='useCallback' Component={UseCallBackHook} />
              </Route>



              <Route path="/*" Component={PageNotFound} />
              {/* <Route path ="/*" element={<Navigate to="/" />} /> */}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
