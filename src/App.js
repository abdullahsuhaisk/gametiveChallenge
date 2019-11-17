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
        props: {
          deltaPosition: {
            x: 300,
            y: 0
          }
        },
        css: {
          title: "Title",
          background: "yellow"
        }
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
        props: {
          deltaPosition: {
            x: 300,
            y: 0
          }
        },
        css: {
          title: "Title",
          background: "yellow"
        }
      }
    ]
  },
  {
    key: 2,
    name: "Scene3",
    components: [
      {
        name: "myButton",
        props: {
          deltaPosition: {
            x: 300,
            y: 0
          }
        },
        css: {
          title: "Title"
        }
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
        <Inputs
          scenes={scenes}
          setScenes={setScenes}
          scene={scenes[selectedScene]}
        />
        <Scene
          scene={scenes[selectedScene]}
          setScenes={setScenes}
          selectedScene={selectedScene}
          scenes={scenes}
        />
        <Properties scenes={scenes} setScenes={setScenes} />
      </div>
      {/* <ReactDrag /> */}
    </>
  );
}

export default App;
