import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, TextStyle } from "react-native"
import { Screen, Wallpaper, Header, Button } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { color, spacing, typography } from "../../theme"
import { BleManager } from 'react-native-ble-plx'

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
	backgroundColor: color.transparent,
	paddingHorizontal: spacing[4],
}
const BOLD: TextStyle = { fontWeight: "bold" }
const TEXT: TextStyle = {
	color: color.palette.white,
	fontFamily: typography.primary,
}
const HEADER: TextStyle = {
	paddingTop: spacing[3],
	paddingBottom: spacing[5] - 1,
	paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
	...BOLD,
	fontSize: 12,
	lineHeight: 15,
	textAlign: "center",
	letterSpacing: 1.5,
}
const BUTTON: ViewStyle = {
	paddingVertical: spacing[4],
	paddingHorizontal: spacing[4],
	backgroundColor: "#5D2555",
}
const BUTTON_TEXT: TextStyle = {
	...TEXT,
	...BOLD,
	fontSize: 13,
	letterSpacing: 2,
}
export const ConnectScreen = observer(function ConnectScreen() {
	const navigation = useNavigation()
	const goBack = () => navigation.goBack()
	const manager = new BleManager()

	const scanAndConnect = () => {
		manager.startDeviceScan(null, null, (error, device) => {
			if (error) {
				// Handle error (scanning will be stopped automatically)
				return
			}

			// Check if it is a device you are looking for based on advertisement data
			// or other criteria.
			console.log(device)
			if (device.name === 'TI BLE Sensor Tag' ||
				device.name === 'SensorTag') {
				// Stop scanning as it's not necessary if you are scanning for one device.
				manager.stopDeviceScan()

				// Proceed with connection.
			}
		})
	}
	const stopScanning = () => {
		manager.stopDeviceScan()
	}
	useEffect(() => {
		const subscription = manager.onStateChange((state) => {
			if (state === 'PoweredOn') {
				scanAndConnect()
				subscription.remove()
			}
		}, true)
	}, [])

	return (
		<View testID="ConnectScreen" style={FULL}>
			<Wallpaper/>

			<Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
				<Header
					headerTx="connectScreen.headerText"
					leftIcon="back"
					onLeftPress={goBack}
					style={HEADER}
					titleStyle={HEADER_TITLE}
				/>
				<Button
					testID="connect-screen-button"
					style={BUTTON}
					textStyle={BUTTON_TEXT}
					tx="connectScreen.stopScanning"
					onPress={stopScanning}
				/>
			</Screen>
		</View>

	)
})
