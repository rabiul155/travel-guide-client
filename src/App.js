
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import LogIn from './component/LogIn/LogIn';
import Register from './component/Register/Register';
import Home from './component/Home/Home';
import Booking from './component/Booking/Booking';
import Hotel from './component/Hotel/Hotel';
import Private from './component/Private';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://62-5-practice-travel-guide-server.vercel.app/place')
        },
        {
          path: '/booking/:id',
          loader: ({ params }) => fetch(`https://62-5-practice-travel-guide-server.vercel.app/booking/${params.id}`),
          element: <Booking></Booking>
        },
        {
          path: '/hotel/:index',
          loader: ({ params }) => fetch(`https://62-5-practice-travel-guide-server.vercel.app/hotel/${params.index}`),
          element: <Private><Hotel></Hotel></Private>
        }
      ]
    }
  ]);



  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
