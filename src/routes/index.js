import DashBoard from "containers/admin/DashBoard/DashBoard";
import Showtime from "containers/admin/Showtime/Showtime";
import User from "containers/admin/User/User";
import History from "containers/client/Auth/History/History";
import Userinfo from "containers/client/Auth/Info/Userinfo";
import Home from "containers/client/Home/Home";
import ComingSoon from "containers/client/Home/MovieList/Components/ComingSoon";
import NowShowing from "containers/client/Home/MovieList/Components/NowShowing";
import Moviedetail from "containers/client/Moviedetail/Moviedetail";

export const clientRoutes = [
    {
      path: '/',
      component: Home,
      exact: true,
      isPrivate: false,
    },
    {
      path: '/movie-detail/:id',
      component: Moviedetail,
      exact: false,
      isPrivate: false,
    },
    {
      path: '/comingsoon',
      component: ComingSoon,
      exact: false,
      isPrivate: false,
    },
    {
      path: '/nowshowing',
      component: NowShowing,
      exact: false,
      isPrivate: false,
    },
    {
      path: '/history',
      component: History,
      exact: false,
      isPrivate: false,
    },
    {
      path: '/user',
      component: Userinfo,
      exact: false,
      isPrivate: false,
    },
  ];
  
  export const adminRoutes = [
    {
      path: '/admin',
      component: DashBoard,
      exact: true,
      isPrivate: true,
    },
    {
      path: '/admin/user',
      component: User,
      exact: true,
      isPrivate: true,
    },
    {
      path: '/admin/showtime',
      component: Showtime,
      exact: true,
      isPrivate: true,
    },
  ];