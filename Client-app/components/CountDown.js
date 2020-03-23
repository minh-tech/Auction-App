import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const CountDown = props => {
	const DURATION = 864000000; // Durations of auction is 10 days from the start day
	const startDate = new Date(props.time);
	const currDate = Date.now();
	const [countDown, setCountDown] = useState(DURATION - (currDate - startDate.getTime()));

	// Convert Miliseconds to a period of time with format DD 00:00:00
	function convertMilisecondsToTime(duration) {

	  let days 		= Math.floor(duration / (24*60*60*1000));
	  let daysms	=	duration % (24*60*60*1000);
	  let hours 	= Math.floor((daysms)/(60*60*1000));
	  let hoursms	=	duration % (60*60*1000);
	  let minutes = Math.floor((hoursms)/(60*1000));
	  let minsms	=	duration % (60*1000);
	  let seconds = Math.floor((minsms)/(1000));

	  hours = (hours < 10) ? "0" + hours : hours;
	  minutes = (minutes < 10) ? "0" + minutes : minutes;
	  seconds = (seconds < 10) ? "0" + seconds : seconds;

    return days + "D " + hours + ":" + minutes + ":" + seconds ;
	}

	// Use Hook to count down
	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDown => (countDown-1000));
		}, 1000);
		return () => clearInterval(interval);
	})

	return (
		<View>
			<Text style={styles.CountDown}>Time left: {convertMilisecondsToTime(countDown)}</Text>
		</View>
  );
};

const styles=StyleSheet.create({
	CountDown: {
		color: 'orangered',
	},
});

export default CountDown;