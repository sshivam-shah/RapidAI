import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Layout from "./components/pages/Layout";
import Dashboard from "./components/pages/Dashboard";
import WriteArticle from "./components/pages/WriteArticle";
import BlogTitles from "./components/pages/BlogTitles";
import RemoveBackground from "./components/pages/RemoveBackground";
import RemoveObject from "./components/pages/RemoveObject";
import ReviewResume from "./components/pages/ReviewResume";
import Community from "./components/pages/Community";
import GenerateImages from "./components/pages/GenerateImages";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import {Toaster} from 'react-hot-toast';

const App = () => {
  // const { getToken } = useAuth();

  // useEffect(() => {
  //   getToken().then((token) => console.log(token));
  // }, []);

  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="blog-titles" element={<BlogTitles />} />
          <Route path="generate-images" element={<GenerateImages />} />
          <Route path="remove-background" element={<RemoveBackground />} />
          <Route path="remove-object" element={<RemoveObject />} />
          <Route path="review-resume" element={<ReviewResume />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
