import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"

import { DeviceConnectList } from "./device-connect-list"
import { Device } from "react-native-ble-plx"

export const testDevices = [
	{
		serviceUUIDs: null,
		isConnectable: null,
		overflowServiceUUIDs: null,
		txPowerLevel: null,
		serviceData: null,
		manufacturerData: "XQUAAgEBCwYA",
		name: "LHB-366AFEAA",
		mtu: 23,
		rssi: -93,
		solicitedServiceUUIDs: null,
		localName: "LHB-366AFEAA",
		id: "FA:E0:01:37:FB:8F",
		_manager: {
			_eventEmitter: "{_subscriber: {…}}",
			_uniqueId: 0,
			_activePromises: "{}",
			_activeSubscriptions: "{}",
			_errorCodesToMessagesMapping: "{0: \"Unknown error occurred. This is probably a bug…}",
			_scanEventSubscription: null
		}
	},
	{
		serviceUUIDs: null,
		isConnectable: null,
		overflowServiceUUIDs: null,
		txPowerLevel: null,
		serviceData: null,
		manufacturerData: "XQUAAgIBCwYA",
		name: "LHB-84505DA3",
		mtu: 23,
		rssi: -88,
		solicitedServiceUUIDs: null,
		localName: "LHB-84505DA3",
		id: "D0:FB:9F:A7:17:55",
		_manager: {
			_eventEmitter: "{_subscriber: {…}}",
			_uniqueId: 0,
			_activePromises: "{}",
			_activeSubscriptions: "{}",
			_errorCodesToMessagesMapping: "{0: \"Unknown error occurred. This is probably a bug…}",
			_scanEventSubscription: null
		}
	},
	{
		serviceUUIDs: [
			"0000feaf-0000-1000-8000-00805f9b34fb"
		],
		isConnectable: null,
		overflowServiceUUIDs: null,
		txPowerLevel: null,
		serviceData: {
			"0000feaf-0000-1000-8000-00805f9b34fb": "EwPe202GCmFJcj8ll1QNnpfODps="
		},
		manufacturerData: null,
		name: null,
		mtu: 23,
		rssi: -77,
		solicitedServiceUUIDs: null,
		localName: null,
		id: "FC:B6:6E:39:A8:A3",
		_manager: {
			_eventEmitter: "{_subscriber: {…}}",
			_uniqueId: 0,
			_activePromises: "{}",
			_activeSubscriptions: "{}",
			_errorCodesToMessagesMapping: "{0: \"Unknown error occurred. This is probably a bug…}",
			_scanEventSubscription: null
		}
	},
	{
		serviceUUIDs: [
			"0000fe9f-0000-1000-8000-00805f9b34fb"
		],
		isConnectable: null,
		overflowServiceUUIDs: null,
		txPowerLevel: null,
		serviceData: {
			"0000fe9f-0000-1000-8000-00805f9b34fb": "AAAAAAAAAAAAAAAAAAAAAAAAAAA="
		},
		manufacturerData: "4AABCMpkmiM=",
		name: null,
		mtu: 23,
		rssi: -86,
		solicitedServiceUUIDs: null,
		localName: null,
		id: "60:E0:E0:E3:2F:58",
		_manager: {
			_eventEmitter: "{_subscriber: {…}}",
			_uniqueId: 0,
			_activePromises: "{}",
			_activeSubscriptions: "{}",
			_errorCodesToMessagesMapping: "{0: \"Unknown error occurred. This is probably a bug…}",
			_scanEventSubscription: null
		}
	},
	{
		serviceUUIDs: [
			"0000fff0-0000-1000-8000-00805f9b34fb"
		],
		isConnectable: null,
		overflowServiceUUIDs: null,
		txPowerLevel: null,
		serviceData: null,
		manufacturerData: null,
		name: "Carista",
		mtu: 23,
		rssi: -57,
		solicitedServiceUUIDs: null,
		localName: "Carista",
		id: "88:2B:99:32:6E:DA",
		_manager: {
			_eventEmitter: "{_subscriber: {…}}",
			_uniqueId: 0,
			_activePromises: "{}",
			_activeSubscriptions: "{}",
			_errorCodesToMessagesMapping: "{0: \"Unknown error occurred. This is probably a bug…}",
			_scanEventSubscription: null
		}
	},
	{
		serviceUUIDs: null,
		isConnectable: null,
		overflowServiceUUIDs: null,
		txPowerLevel: null,
		serviceData: null,
		manufacturerData: "LQEEAAExAAH+iR6OAGDQAAAAAAAA",
		name: "WH-1000XM3",
		mtu: 23,
		rssi: -47,
		solicitedServiceUUIDs: null,
		localName: null,
		id: "CC:98:8B:21:34:FB",
		_manager: {
			_eventEmitter: "{_subscriber: {…}}",
			_uniqueId: 0,
			_activePromises: "{}",
			_activeSubscriptions: "{}",
			_errorCodesToMessagesMapping: "{0: \"Unknown error occurred. This is probably a bug…}",
			_scanEventSubscription: null
		}

	}
]

storiesOf("DeviceConnectList", module)
	.addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
	.add("Behavior", () => (
		<Story>
			<UseCase text="No Devices" usage="No Devices.">
				<DeviceConnectList devices={[] as unknown as Device[]} />
			</UseCase>
			<UseCase text="Test Devices" usage="Test Devices.">
				<DeviceConnectList devices={testDevices as unknown as Device[]} />
			</UseCase>
		</Story>
	))
