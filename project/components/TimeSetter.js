import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View, TextInput } from 'react-native';
import TimeDisplay from './TimeDisplay.js';
import Styles from './Stylesheet.js';

export default class TimeSetter extends React.Component {
	static propTypes = {
		action: PropTypes.func.isRequired,
		time: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
	}
	constructor(props) {
		super(props);
		this.state = { time: 0 };
	}
	componentWillReceiveProps(nextProps) {/*  */
		this.state.time = nextProps.time;
	}
	add5Minuts = () => {
		this.props.action(this.props.type, this.props.time + (5 * 60));
	}
	minus1Minut = () => {
		this.props.action(this.props.type, this.props.time - (1 * 60));
	}
	render() {/*  */
		return (
			<View style={Styles.column}>
				<Text style={{fontWeight: 'bold', color: this.props.color, marginRight: 16}}>
					{this.props.title}
				</Text>
				<View style={Styles.row}>
					<TimeDisplay time={this.state.time} />
					<View style={Styles.column}>
						<Button onPress={this.add5Minuts} title="+" />
						<Button onPress={this.minus1Minut} title="-" />
					</View>
				</View>


			</View>
		)
	}
}