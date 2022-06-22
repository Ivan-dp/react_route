import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Aboutpage,
  Blogpage,
  Homepage,
  Notfoundpage,
  Singlepage,
} from "../pages";
import { Layout } from "./Layout";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/posts" element={<Blogpage />} />
        <Route path="/posts/:id" element={<Singlepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  );
};

export { MyRoutes };
