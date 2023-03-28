import React from "react";
import { HOME_PATH, ABOUT_PATH } from "../../constants/routes";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

interface MenuItemProps {
  name: string;
  path: any;
  icon?: any;
}

const menuItems: MenuItemProps[] = [
  {
    name: "Home",
    path: HOME_PATH,
    icon: HomeIcon,
  },
  {
    name: "About",
    path: ABOUT_PATH,
    icon: InfoIcon,
  },
];

export default menuItems;