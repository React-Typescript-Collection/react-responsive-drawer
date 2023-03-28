import * as ROUTES from "./../constants/routes";

import About from "../pages/About";
import Home from "../pages/Home";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
  layout: boolean;
}

const routes: RouteType[] = [
  {
    path: ROUTES.HOME_PATH,
    component: Home,
    name: "Home Screen",
    protected: false,
    layout: true,
  },
  {
    path: ROUTES.ABOUT_PATH,
    component: About,
    name: "About Screen",
    protected: false,
    layout: true,
  },
];

export default routes;