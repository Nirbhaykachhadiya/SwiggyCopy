import './App.css';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import HomeBody from './HomeBody';
import Header from './Header';
import About from './About';
import ErrorPage from './ErrorPage';
import Menucard from './Menucard';


const  App=()=> {


  return (
    <>
    <Header />
    <Outlet />
    
    </>
  );
}


const appRouter=createBrowserRouter([{

  path:"/",
  element:<App />,
  children:[
    {
    path:"/about",
    element:<About />,
    },
    {
    path:"/",
    element:<HomeBody />,
    },
    {
      path:"/restaurant/:resid",
     element:<Menucard />
    }
  ],
    errorElement:<ErrorPage/>

  


}])

export default appRouter;
