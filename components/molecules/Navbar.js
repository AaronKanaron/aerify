import React from "react";
import { Image, Text, View, StyleSheet } from 'react-native';
import { defaults, styles } from '../../Style';
import { IonIcons } from "../atoms/Icon";


export default class Navbar extends React.PureComponent {
	render() {
		return (
			<View style={styles.header.header} >
				<View style={[styles.header.headerItem, {justifyContent:"flex-start"}]}>
					<Image style={defaults.pfp} source = {{uri:"https://picsum.photos/200"}}/>
				</View>

				<View style={styles.header.headerItem}>
					<Text style={styles.header.headerText}>Home</Text>
				</View>

				<View View style = {[styles.header.headerItem, {justifyContent: "flex-end"}]}>
					<IonIcons size={24} name="search" />
				</View>
			</View>
		);
	}
}

