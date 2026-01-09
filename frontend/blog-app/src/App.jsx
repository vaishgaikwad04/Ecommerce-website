import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./pages/adminPanel/Create";
import Read from "./pages/adminPanel/Read";
import EditBlog from "./pages/adminPanel/Update";
import Fetch from './pages/ui/Fetch';
import Layout from "./components/layout/Layout";
import BlogDetails from "./pages/ui/BlogDetails";
import CategoryPage from "./pages/ui/Category";
import Show from "./pages/ui/Show";
import About from './pages/ui/About';
import Home from "./pages/ui/Home";
import Shop from '../src/pages/ui/Shop'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Nested layout route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/category/:type" element={<CategoryPage />} /> {/* category route */}
          <Route path="/blogs/:id" element={<BlogDetails />} /> {/* blog details */}
          <Route path='/show' element={<Show/>}/>
            <Route path='/shop' element={<Shop/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>

        {/* Admin panel routes */}
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
