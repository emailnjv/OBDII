import { cast, Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { CharacterStoreModel } from '../character-store/character-store'
import { DeviceConfigModel } from "../device-config/device-config"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
	characterStore: types.optional(CharacterStoreModel, {} as any),
	deviceConfigStore: types.optional(DeviceConfigModel, {} as any),
	// deviceConfigStore: DeviceConfigModel
	// deviceConfigStore: types.optional(DeviceConfigModel, getSnapshot(DeviceConfigModel.create())),
})
	.actions(self => ({
		set<
			K extends keyof SnapshotIn<typeof self>,
			T extends SnapshotIn<typeof self>
		>(key: K, value: T[K]) {
			self[key] = cast(value)
		}
	}))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
