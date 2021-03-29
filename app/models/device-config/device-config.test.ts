import { DeviceConfigModel } from "./device-config"
import { Device } from "react-native-ble-plx"

const TestDevice: Device = {
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
	id: "88:2B:99:32:6E:DA"
} as Device

test("can be created", () => {
	const instance = DeviceConfigModel.create({})
	expect(instance).toBeTruthy()
})
test("can change the selectedDevice", () => {
	const deviceConfigStore = DeviceConfigModel.create({})
	const ogSelectedDevice = deviceConfigStore.getSelectedDevice
	expect(ogSelectedDevice).toStrictEqual({})

	deviceConfigStore.setSelectedDevice(TestDevice)
	const newSelectedDevice = deviceConfigStore.getSelectedDevice
	expect(newSelectedDevice.id).toEqual(TestDevice.id)
	expect(deviceConfigStore.getSelectedDeviceId).toEqual(TestDevice.id)
})
