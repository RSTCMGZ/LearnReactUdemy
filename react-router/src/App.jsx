import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import RootLayout from './pages/Root'
import ErrorPage from './pages/Error'
import ProductDetailPage from './pages/ProductDetail'

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/Products' element={<ProductsPage />} />
//   </Route>
// )


// const router = createBrowserRouter(routeDefinitions)


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'Products', element: <ProductsPage /> },
      { path: 'Products/:productId', element: <ProductDetailPage /> },
    ],
  },
])
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/Products' element={<ProductsPage />} />
            <Route path='/Products/:productId' element={<ProductDetailPage />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
