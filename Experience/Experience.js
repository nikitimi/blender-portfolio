import * as THREE from "three"

import Sizes from "./utils/Sizes"
import Time from "./utils/Time"
import Resources from "./utils/Resources"
import assets from "./utils/assets"

import Camera from "./Camera"
import Renderer from "./Renderer"

import World from "./world/World"

export default class Experience {
  static instance
  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance
    }
    Experience.instance = this
    this.canvas = canvas
    this.scene = new THREE.Scene()
    this.sizes = new Sizes()
    this.time = new Time()
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.resources = new Resources(assets)
    this.world = new World()

    this.sizes.on("resize", () => {
      this.resize()
    })
    this.time.on("update", () => {
      this.update()
    })
  }

  resize() {
    this.camera.resize()
    this.renderer.resize()
  }
  update() {
    this.camera.update()
    this.renderer.update()
  }
}
