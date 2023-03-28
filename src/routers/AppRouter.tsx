import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../components/Layout';


import routes from "./routes";

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index + route.path}
            path={route.path}
            element={
              route.layout ? 
                <Layout>
                  <route.component />
                </Layout>
                :
                <route.component />
            }
          />
        ))}
      </Routes>

    </BrowserRouter>
    
  )
}

export default AppRouter;
