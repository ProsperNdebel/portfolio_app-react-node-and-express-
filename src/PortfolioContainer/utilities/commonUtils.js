import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import Testimonial from "../Testimonial/Testimonial";
import ContactMe from "../ContactMe/ContactMe";
export const TOTAL_SCREENS = [
  { screen_name: "Home", component: Home },
  { screen_name: "AboutMe", component: AboutMe },
  { screen_name: "Resume", component: Resume },
  { screen_name: "Testimonial", component: Testimonial },
  { screen_name: "ContactMe", component: ContactMe },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) {
      return i;
    }
  }
  return -1;
};
