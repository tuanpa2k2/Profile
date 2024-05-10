import NotFoundPage from "../Page/NotFoundPage/NotFoundPage";
import SkillPage from "../Page/SkillPage/SkillPage";

export const routes = [
  {
    path: "/",
    isShowNavbar: true,
    isShowPage: true,
  },
  {
    path: "/skill",
    page: SkillPage,
    isShowPage: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
