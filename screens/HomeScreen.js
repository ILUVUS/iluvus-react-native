import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { homeStyle as styles } from "../styles/style";
import strings from "../constants/strings";
import colors from "../constants/colors";

const Stack = createStackNavigator();

// Tab navigation bar for the app
function HomeScreenNav() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
    </View>
  );
}

function CommunityScreenNav() {
  return (
    <View style={styles.container}>
      <Text>Community!</Text>
    </View>
  );
}

function ProfileScreenNav() {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen!</Text>
    </View>
  );
}

function MessageScreenNav() {
  return (
    <View style={styles.container}>
      <Text>MessageScreen!</Text>
    </View>
  );
}

function SettingsScreenNav() {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case strings.home:
              iconName = focused ? "ios-home" : "ios-home-outline";
              break;
            case strings.community:
              iconName = focused ? "ios-earth" : "ios-earth-outline";
              break;
            case strings.profile:
              iconName = focused
                ? "ios-person-circle"
                : "ios-person-circle-outline";
              break;
            case strings.message:
              iconName = focused ? "ios-chatbubble" : "ios-chatbubble-outline";
              break;
            case strings.settings:
              iconName = focused ? "ios-list" : "ios-list-outline";
              break;
            default:
              iconName = "ios-list";
              break;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.darkViolet,
        tabBarInactiveTintColor: colors.gray,
      })}
    >
      <Tab.Screen name={strings.home} component={HomeScreenNav} />
      <Tab.Screen name={strings.community} component={CommunityScreenNav} />
      <Tab.Screen name={strings.profile} component={ProfileScreenNav} />
      <Tab.Screen name={strings.message} component={MessageScreenNav} />
      <Tab.Screen name={strings.settings} component={SettingsScreenNav} />
    </Tab.Navigator>
  );
}
