window.addEventListener('load', () => {
  let type = 'WebGL';
  if (!PIXI.utils.isWebGLSupported()) {
    type = 'canvas';
  }

  PIXI.utils.sayHello(type);

  const app = new PIXI.Application({
    width: 1600,
    height: 900,
    antialias: true,
    transparent: false,
    resolution: 1,
  });
  document.body.appendChild(app.view);

  PIXI.loader
    .add('map.tmx')
    .load(() => {
      const tileMap = new PIXI.extras.TiledMap('map.tmx');
      app.render(tileMap);
    });
});