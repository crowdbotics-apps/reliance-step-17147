import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile48059Navigator from '../features/UserProfile48059/navigator';
import Tutorial48058Navigator from '../features/Tutorial48058/navigator';
import NotificationList48030Navigator from '../features/NotificationList48030/navigator';
import Settings48029Navigator from '../features/Settings48029/navigator';
import Settings48021Navigator from '../features/Settings48021/navigator';
import UserProfile48019Navigator from '../features/UserProfile48019/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile48059: { screen: UserProfile48059Navigator },
Tutorial48058: { screen: Tutorial48058Navigator },
NotificationList48030: { screen: NotificationList48030Navigator },
Settings48029: { screen: Settings48029Navigator },
Settings48021: { screen: Settings48021Navigator },
UserProfile48019: { screen: UserProfile48019Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
