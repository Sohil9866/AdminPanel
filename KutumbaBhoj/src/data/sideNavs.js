import assets from "../assets/assets";

const {
  icons: {
    dashboard,
    dashboard2,
    menu,
    menu2,
    settings,
    settings2,
    user,
    user2,
    insights,
    insight2,
    ordericon,
    ordericon2,
    resturant,
    resturant2,
    endusers2,
    endusers,
  },
} = assets;

export const defaultSec = [
  { path: "", icon: dashboard, activeIcon: dashboard2, name: "Dashboard" },
  { path: "/orders", icon: ordericon, activeIcon: ordericon2, name: "Orders" },
];

export const userSec = [
  { path: "/employees", icon: user, activeIcon: user2, name: "Employees" },
  {
    path: "/endUsers",
    icon: endusers,
    activeIcon: endusers2,
    name: "End-Users",
  },
];

export const adminSec = [
  {
    path: "/resturants",
    icon: resturant,
    activeIcon: resturant2,
    name: "Resturants",
  },
  { path: "/menu", icon: menu, activeIcon: menu2, name: "Menu" },
  { path: "/insights", icon: insights, activeIcon: insight2, name: "Insights" },
  {
    path: "/settings",
    icon: settings,
    activeIcon: settings2,
    name: "Settings",
  },
];
