export const deleteItem = (scenes, scene, componentKey, setScenes) => {
  scene.components = scene.components.filter(
    (item, key) => key !== componentKey
  );
  console.log(scene);
  setScenes(
    scenes.map(item => {
      return item.key === scene.key ? (item = scene) : item;
    })
  );
};
