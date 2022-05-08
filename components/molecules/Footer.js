import React from "react";
import { View, StyleSheet } from "react-native";
import { IonIcons } from "../atoms/Icon";
import { useNavigation } from '@react-navigation/native';

class Footer extends React.PureComponent {
	render() {
		const { navigation } = this.props;
		return (
			<View style={FooterStyles.footer} >
				{/* <IonIcons onPress={() => navigation.navigate("Home")} color="#8dbbff" name="home-outline"/> */}
				<IonIcons onPress={() => navigation.navigate("Search")} color="#8dbbff" name="compass-outline"/>
				<IonIcons color="#8dbbff" name="person-circle-outline"/>
				<IonIcons color="#8dbbff" name="heart-outline"/>
			</View>
		);
	}
}

const FooterStyles = StyleSheet.create({
	footer: {
		position: "absolute",
		bottom: 0,
		height: 128,
		width: "100%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	}
});

export {
	FooterStyles
}
export default function(props) {
	const navigation = useNavigation();

  return <Footer {...props} navigation={navigation} />;
}

