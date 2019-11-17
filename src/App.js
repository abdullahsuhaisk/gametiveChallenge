import React, { useState } from "react";
import Save from "./features/Save";
import ScenesMenu from "./features/ScenesMenu";
import Inputs from "./features/Inputs";
import Scene from "./features/Scene";
import Properties from "./features/Properties";

const initialData = [
  {
    key: 0,
    name: "Scene1",
    components: [
      {
        name: "myButton",
        props: {}
      },
      {
        name: "myLabel",
        props: {}
      }
    ]
  },
  {
    key: 1,
    name: "Scene2",
    components: [
      {
        name: "myButton",
        props: {}
      }
    ]
  },
  {
    key: 2,
    name: "Scene3",
    components: [
      {
        name: "myButton",
        props: {}
      }
    ]
  }
];
function App() {
  const [scenes, setScenes] = useState(initialData);
  const [selectedScene, setSelectedScene] = useState(0);
  return (
    <>
      <Save scenes={scenes} setScenes={setScenes} />
      <ScenesMenu
        scenes={scenes}
        setScenes={setScenes}
        selectedScene={selectedScene}
        setSelectedScene={setSelectedScene}
      />
      <div
        className="wrapper"
        style={{ height: "80vh", background: "black", display: "flex" }}
      >
        <Inputs scenes={scenes} setScenes={setScenes} />
        <Scene
          scene={scenes[selectedScene]}
          setScenes={setScenes}
          selectedScene={selectedScene}
        />
        <Properties scenes={scenes} setScenes={setScenes} />
      </div>
      {/* <ReactDrag /> */}
    </>
  );
}

export default App;
