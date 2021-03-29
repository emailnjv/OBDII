import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { Device as BleDevice } from "react-native-ble-plx"

/**
 * Model description here for TypeScript hints.
 */
export const DeviceModel = types
	.model({})
	.volatile(self => ({
		device: {} as BleDevice
	}))
	.actions(self => ({
		setDevice(value) {
			self.device = value
		}
	}))
/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type DeviceType = Instance<typeof DeviceModel>
export interface Device extends DeviceType {}
type DeviceSnapshotType = SnapshotOut<typeof DeviceModel>
export interface DeviceSnapshot extends DeviceSnapshotType {}
export const createDeviceDefaultModel = () => types.optional(DeviceModel, {})
