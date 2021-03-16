import { DevicesModel } from "./devices"

test("can be created", () => {
  const instance = DevicesModel.create({})

  expect(instance).toBeTruthy()
})
