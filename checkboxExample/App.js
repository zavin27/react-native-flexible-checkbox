/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useMemo} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

import Checkbox from 'react-native-flexible-checkbox';

const App = () => {
	const [normal, setNormal] = useState('unchecked');
	const [big, setBig] = useState('unchecked');
	const [circle, setCircle] = useState('unchecked');
	const [indeterminate, setIndeterminate] = useState('indeterminate');
	const [redIcon, setRedIcon] = useState('checked');
	const [customStyling, setCustomStyling] = useState('checked');
	const [highlight, setHighlight] = useState('checked');
	const [touchableProps, setTouchableProps] = useState('checked');
	const [complex, setComplex] = useState('indeterminate');
	const [translateExample, setTranslateExample] = useState('unchecked');
	
	const rotationValue = useMemo(() => new Animated.Value(0), []);
	const rotationAnimation = Animated.sequence([
		Animated.timing(rotationValue, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}),
		Animated.timing(rotationValue, {
			toValue: 0,
			duration: 1000,
			useNativeDriver: true,
		}),
	]);
	
	const translateX = useMemo(() => new Animated.Value(0), []);
	const translateXAnimation = Animated.sequence([
		Animated.spring(translateX, {
			toValue: 1,
			useNativeDriver: true,
		}),
		Animated.spring(translateX, {
			toValue: 0,
			useNativeDriver: true,
		}),
	]);
	
	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			{/*   Normal   */}
			<Checkbox
				checked={normal}
				onChange={setNormal}
				containerStyles={styles.margins}
			/>
			{/*   Big    */}
			<Checkbox
				checked={big}
				size={70}
				onChange={setBig}
				containerStyles={styles.margins}
			/>
			{/*   Different Shape - Circle   */}
			<Checkbox
				checked={circle}
				size={40}
				onChange={setCircle}
				shape={'circle'}
				containerStyles={styles.margins}
			/>
			{/*  Indeterminate  */}
			<Checkbox
				checked={indeterminate}
				size={40}
				onChange={setIndeterminate}
				shape={'circle'}
				indeterminate
				containerStyles={styles.margins}
			/>
			{/*   Different Color Icon   */}
			<Checkbox
				checked={redIcon}
				size={40}
				onChange={setRedIcon}
				shape={'circle'}
				indeterminate
				iconColor={'red'}
				containerStyles={styles.margins}
			/>
			{/*    Custom Styling   */}
			<Checkbox
				checked={customStyling}
				size={40}
				onChange={setCustomStyling}
				shape={'circle'}
				indeterminate
				iconColor={'red'}
				containerStyles={{
					backgroundColor: 'green',
					borderColor: 'red',
					borderWidth: 5,
					marginTop: 10,
					transform: [{rotate: 90}],
				}}
			/>
			{/*Different Touchable component - TouchableHighlight*/}
			<Checkbox
				checked={highlight}
				size={40}
				onChange={setHighlight}
				shape={'circle'}
				indeterminate
				containerStyles={[
					styles.margins,
					{
						backgroundColor: 'green',
					},
				]}
				touchableType={'highlight'}
			/>
			{/*   Add Any Touchable Props to the respective touchable component  */}
			<Checkbox
				checked={touchableProps}
				size={40}
				onChange={setTouchableProps}
				shape={'circle'}
				indeterminate
				containerStyles={styles.margins}
				touchableType={'highlight'}
				touchableProps={{
					activeOpacity: 0.3,
					underlayColor: 'purple',
				}}
			/>
			{/*   Rotation Animation   */}
			<Checkbox
				checked={complex}
				size={50}
				onChange={setComplex}
				indeterminate
				containerStyles={[
					styles.margins,
					{
						backgroundColor: 'green',
						transform: [
							{
								rotate: rotationValue.interpolate({
									inputRange: [0, 1],
									outputRange: ['0deg', '360deg'],
								}),
							},
						],
					},
				]}
				touchableType={'opacity'}
				touchableProps={{
					onPressIn: () => {
						rotationAnimation.stop();
						rotationValue.setValue(0);
						rotationAnimation.start();
					},
				}}
			/>
			{/*   Translate X   */}
			<Checkbox
				checked={translateExample}
				size={50}
				onChange={setTranslateExample}
				indeterminate
				containerStyles={[
					styles.margins,
					{
						backgroundColor: 'green',
						transform: [
							{
								translateX: translateX.interpolate({
									inputRange: [0, 1],
									outputRange: [0, 100],
								}),
							},
						],
					},
				]}
				touchableType={'opacity'}
				touchableProps={{
					onPressIn: () => {
						translateXAnimation.stop();
						translateX.setValue(0);
						translateXAnimation.start();
					},
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	margins: {
		margin: 5,
	},
});

export default App;
