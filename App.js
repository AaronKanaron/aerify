import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

// Mains
import Home from "./sceens/Home";
import Search from "./sceens/Search";

export default function App() {
	const [fontsLoaded] = useFonts({
		"NotoSans": require("./assets/fonts/NotoSans-Regular.ttf"),
		"NotoSansBold": require("./assets/fonts/NotoSans-Bold.ttf"),
	});
	if (!fontsLoaded) return null;

  return (
    <React.Fragment>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
				<Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	</React.Fragment>
  );
}




