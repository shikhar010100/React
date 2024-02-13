import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.tsx';
import About from './Components/About/About.tsx';
import Contact from './Components/Contact/Contact.tsx';
import User from './Components/User/User.tsx';
import Github, { githubInfoLoader } from './Components/Github/Github.tsx';

const rootElement = document.getElementById('root')!;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github />}
      />
    </Route>
  )
);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
