import { proxy } from "valtio";

// What is define here can be used through the app
const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png'
});

export default state;