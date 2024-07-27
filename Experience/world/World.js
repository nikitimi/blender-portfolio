import * as THREE from "three"
import Experience from "../Experience"

import Store from "./Store"
import Environment from "./Environment"

export default class World {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
    this.camera = this.experience.camera
    this.resources = this.experience.resources

    this.resources.on("ready", () => {
      this.environment = new Environment()
      this.store = new Store()
    })
  }
  resize() {}
  update() {}
}
