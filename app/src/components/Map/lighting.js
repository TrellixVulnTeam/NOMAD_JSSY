import { AmbientLight, PointLight, LightingEffect } from '@deck.gl/core';

const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 0.5
});

const pointLight1 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.2,
  position: [-0.144528, 49.739968, 80000]
});

const pointLight2 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.2,
  position: [-3.807751, 54.104682, 8000]
});

const lightingEffect = new LightingEffect({
  ambientLight, 
  pointLight1, 
  pointLight2
});

export default lightingEffect;