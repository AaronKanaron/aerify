import React from "react";
import { default as IconAntDesignLib } from 'react-native-vector-icons/AntDesign';
import { default as IconEntypoLib } from 'react-native-vector-icons/Entypo';
import { default as IonIconsLib } from 'react-native-vector-icons/Ionicons';

import { TouchableOpacity } from "react-native";

const DefaultValues = {
	iconSize: 32,
	iconColor: "#fff",
}

export class IonIcons extends React.PureComponent {
	constructor(props) {
		super(props);
		this.name = this.props.name;
	}

	render() {
		return (
			<TouchableOpacity activeOpacity={0.75} onPress={this.props.onPress && this.props.onPress()}>
				<IonIconsLib name={this.name} size={DefaultValues.iconSize} color={DefaultValues.iconColor} {...this.props} />
			</TouchableOpacity>
		)
	}
}

export class IconAntDesign extends React.PureComponent {
	constructor(props) {
		super(props);
		this.name = this.props.name;
	}

	render() {
		return (
			<IconAntDesignLib name={this.name} size={DefaultValues.iconSize} color={DefaultValues.iconColor} {...this.props} />
		)
	}
}

export class IconEntypo extends React.PureComponent {
	constructor(props) {
		super(props);
		this.name = this.props.name;
	}

	render() {
		return (
			<IconEntypoLib name={this.name} size={DefaultValues.iconSize} color={DefaultValues.iconColor} {...this.props} />
		)
	}
}

