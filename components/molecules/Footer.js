import React from "react";
import { View } from "react-native";
import { IonIcons } from "../atoms/Icon";
import { useNavigation } from '@react-navigation/native';

import { styles } from "../../Style";

class Footer extends React.PureComponent {
	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.footer.footer} >
				<IonIcons onPress={() => navigation.navigate("Home")} color="#8dbbff" name="home-outline"/>
				<IonIcons onPress={() => navigation.navigate("Search")} color="#8dbbff" name="compass-outline"/>
				<IonIcons color="#8dbbff" name="person-circle-outline"/>
				<IonIcons color="#8dbbff" name="heart-outline"/>
			</View>
		);
	}
}

export default function(props) {
	const navigation = useNavigation();

  return <Footer {...props} navigation={navigation} />;
}

