import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, SafeAreaView } from "react-native"
import { Screen, Wallpaper, Header, Button } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { color, FULL, CONTAINER, HEADER, HEADER_TITLE, BUTTON, BUTTON_TEXT, FOOTER, FOOTER_CONTENT } from "../../theme"
import { BleManager, Device } from 'react-native-ble-plx'

interface deviceIDMap {
	id: Device
}

export const ConnectScreen = observer(function ConnectScreen() {
	const [devices, deviceSetter] = useState({} as deviceIDMap)
	const [manager, setManager] = useState({} as BleManager)
	const navigation = useNavigation()
	const goBack = () => navigation.goBack()

	const setDevice = (device: Device) => {
		const newState: deviceIDMap = {
			...devices,
		}
		newState[device.id] = device
		deviceSetter(newState)
	}
	const stopScanning = () => {
		manager.stopDeviceScan()
	}
	useEffect(() => {
		const instantiatedManager = new BleManager()
		setManager(instantiatedManager)

		instantiatedManager.startDeviceScan(null, null, (error, device) => {
			if (error) {
				// Handle error (scanning will be stopped automatically)
				return
			}
			setDevice(device)
			// manager.stopDeviceScan()
		})
		return () => {
			instantiatedManager.destroy()
		}
	}, [devices])

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
			</Screen>
			<SafeAreaView style={FOOTER}>
				<View style={FOOTER_CONTENT}>
					<Button
						testID="connect-screen-button"
						style={BUTTON}
						textStyle={BUTTON_TEXT}
						tx="connectScreen.stopScanning"
						onPress={stopScanning}
					/>
				</View>
			</SafeAreaView>
		</View>

	)
})
