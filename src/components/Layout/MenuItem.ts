import { HOME_PATH, ABOUT_PATH, SETTINGS_PATH } from "../../constants/routes";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';

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
  {
    name: "Setting",
    path: SETTINGS_PATH,
    icon: SettingsIcon,
  },
];

export default menuItems;