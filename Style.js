import { StyleSheet } from "react-native";

const vars = {
	// colors
	primaryText: '#fff',
	primaryBackground: '#23293D',
	secondaryBackground: '#2B2E3A',
}


const defaults = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: vars.primaryBackground,
	},

	main: {
		width: "100%",
		paddingHorizontal: "5%",

	},

	text: {
		fontSize: 22,
		color: vars.primaryText,
		fontWeight: 'bold',
		// fontFamily: "NotoSansBold"

	},

	pfp: {
		height: "55%",
		aspectRatio: 1,
		borderRadius: 100,
	},
});


const styles = {
	footer: StyleSheet.create({
		footer: {
			position: "absolute",
			bottom: 0,
			height: 128,
			width: "100%",

			display: "flex",
			flexDirection: "row",
			justifyContent: "space-evenly",
			alignItems: "center",
		},
	}),

	header: StyleSheet.create({
		header: {
			position: "relative",
			top: 0,
			width: "100%",
			height: 84,

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
	}),


	
};

export {
	defaults,
	styles,
	vars
};