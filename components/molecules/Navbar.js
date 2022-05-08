import React from "react";
import { Image, Text, View, StyleSheet } from 'react-native';
import { styles, vars } from '../../Style';
import { IonIcons } from "../atoms/Icon";


export default class Navbar extends React.PureComponent {
	render() {
		return (
			<View style = {headerStyles.header} >
				<View style={[headerStyles.headerItem, {justifyContent:"flex-start"}]}>
					<Image style={styles.pfp} source = {{uri:"https://picsum.photos/200"}}/>
				</View>

				<View style={headerStyles.headerItem}>
					<Text style={headerStyles.headerText}>Home</Text>
				</View>

				<View View style = {[headerStyles.headerItem, {justifyContent: "flex-end"}]}>
					<IonIcons size={24} name="search" />
				</View>
			</View>
		);
	}
}

const headerStyles = StyleSheet.create({
	header: {
		position: "relative",
		top: 0,
		width: "100%",
		height: 84,
		// borderColor: "#e33",
		// borderWidth: 1,
		// borderRadius: 10,

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: "5%",
		marginBottom: 16,
	},

	headerItem:{
		flex: 1,
		height: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},

	headerText: {
		fontSize: 20,
		color: vars.primaryText,
		fontWeight: "400",
	},
});

export {
	headerStyles
}
