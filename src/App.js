import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { ProductsData } from "./Components/api/api";
import Signin from "./Components/Home/Signin";
import Registraton from "./Components/Home/Registraton";
import CheckOut from "./Components/CheckOut/CheckOut";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={ProductsData}></Route>
          <Route path="/checkout" element={<CheckOut/>}></Route>
        </Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/registraton" element={<Registraton/>}></Route>
      </Route>
    )
  );

  return (
    <div className="bg-gray h-screen">
      <RouterProvider router={router}> </RouterProvider>

      {/* <main className="max-w-screen-2xl mx-auto">
        {/*Banner
       <Banner />

        {/*productFeed*
       {/* <ProductFeed /> *

      </main>*/}
    </div>
  );
}

export default App;
