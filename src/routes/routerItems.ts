import {
  PATH_HOME,
  PATH_OUR_STORY,
  PATH_RULES,
  PATH_LEADERBOARD,
  PATH_RUBRIC
} from '../helpers/urlList';
import HomePage from '../pages/HomePage';
import OurStoryPage from '../pages/OurStoryPage';
import RulesPage from '../pages/RulesPage';
import LeaderboardPage from '../pages/LeaderboardPage';
import RubricPage from '../pages/RubricPage';

export interface IRouterItems {
  element: any;
  path: string;
  key?: string;
}

const ROUTER_ITEMS: IRouterItems[] = [
  {
    key: '0',
    path: PATH_HOME,
    element: HomePage,
  },
  {
    key: '1',
    path: PATH_OUR_STORY,
    element: OurStoryPage,
  },
  {
    key: '2',
    path: PATH_RULES,
    element: RulesPage,
  },
  {
    key: '3',
    path: PATH_LEADERBOARD,
    element: LeaderboardPage,
  },
  {
    key: '4',
    path: PATH_RUBRIC,
    element: RubricPage,
  },
];

export default ROUTER_ITEMS;
