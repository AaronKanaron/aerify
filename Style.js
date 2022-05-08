// so this is basically this is basically you know the CSS countrerbart of REact Native, made by facebook for the app in the app in the run on this ssytem as the styles.js file.

const vars = {
	// colors
	primaryText: '#fff',
	primaryBackground: '#23293D',
	secondaryBackground: '#2B2E3A',
}


import {
	StyleSheet
} from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: vars.primaryBackground,
	},

	main: {
		width: "100%",
		paddingHorizontal: "5%",
		
	},

	pfp: {
		height: "55%",
		aspectRatio: 1,
		borderRadius: 100,
	},

	text: {
		fontSize: 22,
		color: vars.primaryText,
		fontWeight: 'bold',
		// fontFamily: "NotoSansBold"
		
	},

	icon:{
		color: "red",
		fontSize: 30,
	},

	image: {
		width: "100%",
		height: 500,
		marginVertical: 16,
	},

});

export {
	styles, vars
};