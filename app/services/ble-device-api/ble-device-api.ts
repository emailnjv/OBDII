import * as Types from "./ble-device-api.types"
import { BleManager } from "react-native-ble-plx"

/**
 * Manages all connections with a specified BLE peripheral device
 */
export class BleDeviceApi {
	/**
	 * The underlying BleManager instance.
	 */
	manager: Types.BleManager
	/**
	 * The underlying BleManager instance.
	 */
	device: Types.Device

	/**
	 * Creates the api.
	 * @constructor
	 * @remarks A device instance or a device ID to target must be supplied
	 * @param device - A supplied Ble device to instantiate the API with. (must
	 * @param manager - An optionally supplied BleManager instance to be used within the API, if not supplied one will be created.
	 * @param targetDeviceId - An optional supplied ID to be used to filter the available devices when a device isn't passed.
	 */
	constructor(device?: Types.Device, manager?: Types.BleManager, targetDeviceId?: Types.DeviceId) {
		if (manager) {
			this.manager = manager
		} else {
			this.manager = new BleManager()
		}
		if (device) {
			this.device = device
		} else if (targetDeviceId) {
			this.manager.startDeviceScan(null, null, (error, device) => {
				if (error) {
					// Handle error (scanning will be stopped automatically)
					__DEV__ && console.tron.error(error.message, null)

					return
				}

				// Check if it is a device you are looking for based on advertisement data
				// or other criteria.
				if (device.id && device.id === targetDeviceId) {
					// Stop scanning as it's not necessary if you are scanning for one device.
					this.manager.stopDeviceScan()
					this.device = device
				}
			})
		} else {
			__DEV__ && console.tron.error("Missing the device or targetDeviceId parameters", null)
		}
	}

	/**
	 * Destroys the manager instance
	 * @public
	 */
	public destroy() {
		try {
			this.manager.destroy()
		} catch (e) {
			__DEV__ && console.tron.error(e.message, null)
		}
	}
}
