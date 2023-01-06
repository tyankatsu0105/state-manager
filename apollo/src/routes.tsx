import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { Component as Home } from "./pages/home";
import { Basic } from "./design/layouts/basic";

export const Component = () => (
  <React.Suspense fallback={<div>loading...</div>}>
    <Routes>
      <Route path="/" element={<Basic />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </React.Suspense>
);
