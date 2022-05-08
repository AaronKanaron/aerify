import React from "react";
import { SafeAreaView, Text, StatusBar, View } from "react-native";
import Footer from "../components/molecules/Footer";
import Navbar from "../components/molecules/Navbar";

import { styles } from "../Style";

export default class Home extends React.PureComponent {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Navbar/>

				<View style={styles.main}>
					<Text style={styles.text}>
						SEARCH
					</Text>
				</View>

				<Footer/>

				<StatusBar style="light" />
			</SafeAreaView>
		);
	}
}