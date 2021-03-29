import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, SafeAreaView } from "react-native"
import { Screen, Wallpaper, Header, Button, DeviceConnectList } from "../../components"
import { useNavigation } from "@react-navigation/native"
import {
	color,
	FULL,
	CONTAINER,
	HEADER,
	HEADER_TITLE,
	BUTTON,
	BUTTON_TEXT,
	FOOTER,
	FOOTER_CONTENT,
} from "../../theme"
import { BleManager, Device } from 'react-native-ble-plx'
import { useStores } from "../../models"

interface deviceIDMap {
	id: Device
}

export const ConnectScreen = observer(function ConnectScreen() {
	const [devices, deviceSetter] = useState({} as deviceIDMap)
	const [manager, setManager] = useState({} as BleManager)
	const navigation = useNavigation()
	const goBack = () => navigation.goBack()
	const { deviceConfigStore } = useStores()

	useEffect(() => {
		const instantiatedManager = new BleManager()
		setManager(instantiatedManager)

		instantiatedManager.startDeviceScan(null, null, (error, device) => {
			if (error) {
				// Handle error (scanning will be stopped automatically)
				return
			}
			setDevice(device)
			if (device.name && device.name === "WH-1000XM3") {
				console.log("in case")
			}
		})
		return () => {
			instantiatedManager.destroy()
		}
	}, [devices])

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
	// const connectToTarget = async () => {
	// 	const filteredData = Object.values(devices as unknown as Device[]).filter((device: Device) => device.name && device.name === "LE_WH-1000XM3")
	// 	if (filteredData.length > 0) {
	// 		await connectDevice(filteredData[0])
	// 	}
	// }
	const log = () => {
		console.log(deviceConfigStore.getSelectedDevice)
	}
	// const connectDevice = async (device: Device): Promise<Device> => {
	// 	// eslint-disable-next-line no-useless-catch
	// 	// try {
	// 	const connectedDevice = await device.connect()
	// 	const exploredDevice = await connectedDevice.discoverAllServicesAndCharacteristics()
	// 	console.log(exploredDevice)
	// 	return exploredDevice
	// 	// } catch (e) {
	// 	// 	throw e
	// 	// }
	// }

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
					<DeviceConnectList devices={Object.values(devices as unknown as Device[])}/>
					<Button
						testID="connect-screen-button"
						style={BUTTON}
						textStyle={BUTTON_TEXT}
						tx="connectScreen.stopScanning"
						onPress={stopScanning}
					/>
					<Button
						testID="connect-screen-button"
						style={BUTTON}
						textStyle={BUTTON_TEXT}
						tx="common.log"
						onPress={log}
					/>
				</View>
			</SafeAreaView>
		</View>

	)
})
