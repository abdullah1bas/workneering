import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Search from './pages/user/Search.jsx';
import FreelanceRequest from './pages/user/FreelanceRequest.jsx';
import AllBlogs from './pages/blogs/AllBlogs.jsx';
import AddBlogs from './pages/blogs/AddBlogs.jsx';
import AddServices from './pages/blogsService/AddServices.jsx';
import AllServices from './pages/blogsService/AllServices.jsx';
import AllComplaints from './pages/support/AllComplaints.jsx';
import FQA from './pages/fqa/FQA.jsx';
import AddFQA from './pages/fqa/AddFQA.jsx';
import Profile from './pages/user/Profile.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='user/Profile' element={<Profile />} />
      <Route path='user/Search' element={<Search />} />
      <Route path='user/FreelanceRequest' element={<FreelanceRequest />} />
      <Route path='blogs/AllBlogs' element={<AllBlogs />} />
      <Route path='blogs/AddBlogs' element={<AddBlogs />} />
      <Route path='blogsService/AllServices' element={<AllServices />} />
      <Route path='blogsService/AddServices' element={<AddServices />} />
      <Route path='support/AllComplaints' element={<AllComplaints />} />
      <Route path='fqa/FQA' element={<FQA />} />
      <Route path='fqa/AddFQA' element={<AddFQA />} />
      {/* ... etc. */}
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
