import React from "react";
import { SafeAreaView, Text, StatusBar, View } from "react-native";
import Footer from "../components/molecules/Footer";
import Navbar from "../components/molecules/Navbar";

import { styles, defaults } from "../Style";

export default class Home extends React.PureComponent {
	render() {
		return (
			<SafeAreaView style={defaults.container}>
				<Navbar/>

				<View style={defaults.main}>
					<Text style={defaults.text}>
						SEARCH
					</Text>
				</View>

				<Footer/>

				<StatusBar style="light" />
			</SafeAreaView>
		);
	}
}