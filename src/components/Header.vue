<template>
  <div id="header">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'Header',
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      models: [],
    };
  },
  mounted() {
    this.initThreeJS();
    window.addEventListener('resize', this.onWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    initThreeJS() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.z = 5;

      this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas });
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

      for (let i = 0; i < 7; i++) {
        const model = new THREE.Mesh(geometry, material);
        model.position.x = (i - 3) * 2;
        this.scene.add(model);
        this.models.push(model);
      }

      this.animate();
    },
    animate() {
      requestAnimationFrame(this.animate);

      this.models.forEach(model => {
        model.rotation.x += 0.01;
        model.rotation.y += 0.01;
      });

      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

canvas {
  display: block;
}
</style>
