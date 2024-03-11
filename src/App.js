import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Products from './Components/Products';
import Orders from './Components/Orders';
import CalendarView from './Components/CalendarView';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /><Dashboard/></>
    },
    {
      path: "/products",
      element: <><Navbar /><Products/></>
    },
    {
      path: "/orders",
      element: <><Navbar /><Orders /></>
    },
    {
      path: "/calendar",
      element: <><Navbar /><CalendarView/></>
    },
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
