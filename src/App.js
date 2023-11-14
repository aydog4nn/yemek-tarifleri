import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Search from "./pages/search/Search";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import MainLayout from "./layouts/MainLayout";

const routes = createBrowserRouter([

  {
    path:'/',
    element:<MainLayout />,
    children: [
      {path:'/',element:<Home/>},
      {path:'/tarifler',element:<Home/>},
      {path:'/create',element:<Create/>},
      {path:'/tarifler/:id',element:<Details/>},
      {path:'/search',element:<Search/>},
    ]
  },

  

]);

function App() {
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
