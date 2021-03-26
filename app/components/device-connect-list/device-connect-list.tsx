import * as React from "react"
import { FlatList, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { BLACK_TEXT, FLAT_LIST, LIST_CONTAINER } from "../../theme"
import { Text } from "../"
import { Device } from 'react-native-ble-plx'

export interface DeviceConnectListProps {
	/**
   * An optional style override useful for padding & margin.
   */
	style?: ViewStyle
	devices: Device[]
}

/**
 * Describe your component here
 */
export const DeviceConnectList = observer(function DeviceConnectList(props: DeviceConnectListProps) {
	const { style, devices } = props

	return (
		<View style={style} testID={"DeviceConnectList"} nativeID={"DeviceConnectList"}>
			<FlatList
				contentContainerStyle={FLAT_LIST}
				data={devices}
				keyExtractor={(item: Device) => item.id}
				renderItem={({ item }: any) => {
					return (
						<View style={LIST_CONTAINER}>
							<Text style={BLACK_TEXT}>
								{item.localName || item.name || item.id}
							</Text>
						</View>
					)
				}}
			/>
		</View>
	)
})
