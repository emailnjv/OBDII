import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { createDeviceDefaultModel } from "../device/device"
import { Device } from "react-native-ble-plx"

/**
 * Model description here for TypeScript hints.
 */
export const DeviceConfigModel = types
	.model("DeviceConfig")
	.props({
		selectedDevice: createDeviceDefaultModel()
	}).extend(withEnvironment)
	.views((self) => ({
		get getSelectedDeviceId(): string | null {
			return self.selectedDevice.device.id
		},
		// get getIsConnected(): boolean {
		// 	return self.isConnected
		// },
		get getSelectedDevice(): Device | Record<string, never> {
			return self.selectedDevice.device
		}
	})) // eslint-disable-line @typescript-eslint/no-unused-vars
	.actions((self) => ({
		setSelectedDevice(device: Device) {
			self.selectedDevice.setDevice(device)
			if (__DEV__) console.tron.log(device)
		}
	}))

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type DeviceConfigType = Instance<typeof DeviceConfigModel>
export interface DeviceConfig extends DeviceConfigType {}
type DeviceConfigSnapshotType = SnapshotOut<typeof DeviceConfigModel>
export interface DeviceConfigSnapshot extends DeviceConfigSnapshotType {}
export const createDeviceConfigDefaultModel = () => types.optional(DeviceConfigModel, {})
