import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Styles from './Stylesheet'

export default class TimeDisplay extends React.Component {
	static propTypes = {
		time: PropTypes.number.isRequired
	}
	constructor(props) {
		super(props);
	}
	formatTwoDigitsNumber(n) {/*  */
		return n > 9 ? "" + n : "0" + n;
	}
	render() {
		const timeMinsAndSecs = `${this.formatTwoDigitsNumber(parseInt(this.props.time / 60))}:${this.formatTwoDigitsNumber(this.props.time % 60)}`;
		return (
			<Text style={Styles.timeDisplay}>
				{timeMinsAndSecs}
			</Text>
		)
	}
}

