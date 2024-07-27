import * as THREE from "three"
import Experience from "../Experience"

export default class Store {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.store = this.resources.items.store.scene

    this.setModel()
  }
  setModel() {
    this.store.children.forEach((child) => {
      child.castShadow = true
      child.receiveShadow = true

      if (child instanceof THREE.Group) {
        child.children.forEach((groupchild) => {
          groupchild.castShadow = true
          groupchild.receiveShadow = true
        })
      }
    })
    this.scene.add(this.store)
  }
  resize() {}
  update() {}
}
