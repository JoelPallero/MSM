import Home from '../pages/Home';
import Login from '../pages/Login';
import Groups from '../pages/Groups';
import Members from '../pages/Members';
import Songs from '../pages/Songs';
import Search from '../pages/Search';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/groups', component: Groups },
  { path: '/members', component: Members },
  { path: '/songs', component: Songs },
  { path: '/search', component: Search }
];

export default routes;
