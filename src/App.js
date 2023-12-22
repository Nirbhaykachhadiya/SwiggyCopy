//import './App.css';
import './index.css';
import {createBrowserRouter,Outlet} from 'react-router-dom'
import HomeBody from './Components/HomeBody';
import Header from './Components/Header';
import About from './Components/About';
import ErrorPage from './Components/ErrorPage';
import Menucard from './Components/Menucard';
import { lazy,Suspense } from 'react';

const Instamart=lazy(()=>import("./Components/Instamart"))


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
    },
    {
      path:"/Instamart",
     element:<Suspense fallback={<h1>Loading</h1>}><Instamart /></Suspense>
    }
  ],
    errorElement:<ErrorPage/>

  


}])

export default appRouter;
