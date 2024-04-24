import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element={<HomePage />} />
    <Route path='/Products' element={<ProductsPage />} />
  </Route>
)


// const router = createBrowserRouter([
//   { path: '/', element: <HomePage /> }, { path: '/Products', element: <ProductsPage /> }
// ])

const router = createBrowserRouter(routeDefinitions)
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
