import React from "react";
import { SafeAreaView, Text, StatusBar, View } from "react-native";
import Footer from "../components/molecules/Footer";
import Navbar from "../components/molecules/Navbar";

import { defaults, styles } from "../Style";

export default class Home extends React.PureComponent {
	render() {
		return (
			<SafeAreaView style={defaults.container}>
				<Navbar/>

				<View style={defaults.main}>
					<Text style={defaults.text}>
						Recommended
					</Text>
				</View>

				<Footer navigation={this.props.navigation}/>

				<StatusBar style="light" />
			</SafeAreaView>
		);
	}
}