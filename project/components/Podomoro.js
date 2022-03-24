
import React from 'react';
import TimeDisplay from './TimeDisplay.js';
import { View, Button, Text } from 'react-native';
import { vibrate } from '../utils';
import Pause from './Pause.js'
import TimeSetter from './TimeSetter';
import Styles from './Stylesheet'

export default class Pomodoro extends React.Component {
	constructor() {
		super();
		this.state = {
			rest: (5 * 60),
			work: (25 * 60),
			time: (25 * 60),
			pause: false,
			fase: "work"
		};
		this.tick = this.tick.bind(this);
	}
	componentDidMount() {
		this.timerID = setInterval(this.tick, 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	toggleWorkRest = () => {/*  */
		let nextFase = this.state.fase == "work" ? "rest" : "work";
		let nextTime = nextFase == "work" ? this.state.work : this.state.rest;
		this.setState({
			...this.state,
			fase: nextFase, time: nextTime
		});
	}
	tick() {
		if (this.state.time > 0 && !this.state.pause) {
			this.setState({
				...this.state,
				time: this.state.time - 1,
			});

		}
		if (this.state.time == 0) {
			vibrate();
			this.toggleWorkRest();
		}
	}
	togglePause = () => {/*  */
		this.setState({ ...this.state, pause: !this.state.pause });
	}
	setTimeValue = (timer, value) => {/*  */
		let newState = { ...this.state };
		newState[ timer ] = value;
		this.setState(newState);
	}
	resetPommodoro = () => {/*  */
		this.setState(
			{
				...this.state,
				time: this.state.work,
				pause: false,
				fase: "work"
			}
		)
	}
	render() {
		return (
			<View style={Styles.container}>
				<View>
					<Text style={Styles.appTitle}>
						{this.state.fase}
					</Text>
				</View>
				<TimeDisplay
					style={Styles.flexEnd}
					time={this.state.time}
				/>
				<View style={[ Styles.row ]}>
					<Pause pause={this.state.pause} togglePause={this.togglePause} />
					<Button onPress={this.resetPommodoro} title="RESET" />
				</View>
				<View style={[ Styles.row ]}>
						<TimeSetter time={this.state.work} type="work" action={this.setTimeValue} title="Work" color="green" />
						<TimeSetter time={this.state.rest} type="rest" action={this.setTimeValue} title="Rest" color="red"/>
				</View>
			</View>
		);
	}
}



