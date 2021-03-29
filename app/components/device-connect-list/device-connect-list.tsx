import * as React from "react"
import { FlatList, TouchableHighlight, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { BLACK_TEXT, FLAT_LIST, LIST_CONTAINER } from "../../theme"
import { Text } from "../"
import { Device } from 'react-native-ble-plx'
import { useStores } from "../../models"

export interface DeviceConnectListProps {
	/**
   * An optional style override useful for padding & margin.
   */
	style?: ViewStyle
	selectedDeviceStyle?: ViewStyle
	devices: Device[]
}

/**
 * Describe your component here
 */
export const DeviceConnectList = observer(function DeviceConnectList(props: DeviceConnectListProps) {
	const { style, devices, selectedDeviceStyle } = props
	const { deviceConfigStore } = useStores()
	return (
		<View style={style} testID={"DeviceConnectList"} nativeID={"DeviceConnectList"}>
			<FlatList
				contentContainerStyle={FLAT_LIST}
				data={devices}
				keyExtractor={(device: Device) => device.id}
				renderItem={({ item }: any) => {
					return (
						<View style={ deviceConfigStore.getSelectedDeviceId && item.id === deviceConfigStore.getSelectedDeviceId ? [selectedDeviceStyle, LIST_CONTAINER] : LIST_CONTAINER}>
						{/*<View style={LIST_CONTAINER}>*/}
							<TouchableHighlight onPress={() => deviceConfigStore.selectedDevice.setDevice(item)} underlayColor="white">
								<Text style={BLACK_TEXT}>
									{console.log(deviceConfigStore.getSelectedDeviceId)}
									{item.localName || item.name || item.id}
								</Text>
							</TouchableHighlight>
						</View>
					)
				}}
			/>
		</View>
	)
})
