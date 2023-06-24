import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home_screen";
import VideoPlayerScreen from "./screens/video_screen";


const Stack = createNativeStackNavigator();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator 
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#42A5F5'
      },
      headerTintColor: "#fff",
      headerTitleAlign: "center",
      headerTitleStyle: {
      fontWeight: "600"
      }
    }
    }
    >
      <Stack.Screen name="Home-Screen" component={HomeScreen} options={{title: 'Home'}}
      />
      <Stack.Screen name="Video-Screen" component={VideoPlayerScreen} options={{title: 'Video'}}/>
    </Stack.Navigator>
  </NavigationContainer>;
}




