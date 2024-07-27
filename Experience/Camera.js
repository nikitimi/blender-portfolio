import * as THREE from "three"
import Experience from "./Experience"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default class Camera {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas

    this.createPerspectiveCamera()
    this.createOrthographicCamera()
    this.setOrbitControls()
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      75,
      this.sizes.aspectRatio,
      0.3,
      1000
    )
    this.scene.add(this.perspectiveCamera)
    this.perspectiveCamera.position.z = 2
    this.perspectiveCamera.position.x = 2
    this.perspectiveCamera.position.y = 4
  }

  createOrthographicCamera() {
    this.frustrum = 5
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.frustrum) / 2,
      (this.sizes.aspect * this.sizes.frustrum) / 2,
      this.sizes.frustrum / 2,
      -this.sizes.frustrum / 2,
      -100,
      100
    )
    this.scene.add(this.orthographicCamera)

    //Helper
    // const size = 10
    // const divisions = 10

    // const gridHelper = new THREE.GridHelper(size, divisions)
    // this.scene.add(gridHelper)

    // const axesHelper = new THREE.AxesHelper(size, divisions)
    // this.scene.add(axesHelper)
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.perspectiveCamera, this.canvas)
    this.controls.enableDamping = true
    this.controls.enableZoom = true
  }

  resize() {
    // Updating Cameras on Resize
    this.perspectiveCamera.aspect = this.sizes.aspectRatio
    this.perspectiveCamera.updateProjectionMatrix()

    this.orthographicCamera.top = this.sizes.frustrum / 2
    this.orthographicCamera.right =
      (this.sizes.aspect * this.sizes.frustrum) / 2
    this.orthographicCamera.bottom = -this.sizes.frustrum / 2
    this.orthographicCamera.left =
      (-this.sizes.aspect * this.sizes.frustrum) / 2
    this.orthographicCamera.updateProjectionMatrix()
  }

  update() {
    this.controls.update()
  }
}
