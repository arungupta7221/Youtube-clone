import Body from './components/Body'
import Header from './components/Header'
import './App.css'
import { Provider } from 'react-redux'
import store from './utils/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Children } from 'react'
import MainComponent from './components/MainComponent'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainComponent />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
    ],
  },
])
function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App
