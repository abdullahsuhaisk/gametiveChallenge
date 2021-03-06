import React, { useState } from "react";
import Save from "./features/Save";
import ScenesMenu from "./features/ScenesMenu";
import Inputs from "./features/Inputs";
import Scene from "./features/Scene";
import Properties from "./features/Properties";
import { BACKGROUNDCOLOR } from "./constants/color";

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
          background: "palevioletred",
          width: "100px",
          height: "110px",
          color:'black'
        }
      },
      {
        name: "myLabel",
        props: {
          deltaPosition: {
            x: 300,
            y: 0
          }
        },
        css: {
          title: "Title",
          background: "yellow",
          width: "100px",
          height: "20px",
          color: "black"
        }
      }
    ]
  },
  {
    key: 1,
    name: "Scene2",
    components: []
  },
  {
    key: 2,
    name: "Scene3",
    components: []
  }
];
function App() {
  const [scenes, setScenes] = useState(
    localStorage.getItem("JSON")
      ? JSON.parse(localStorage.getItem("JSON"))
      : initialData
  );
  console.log(scenes);
  const [selectedScene, setSelectedScene] = useState(0);
  const [selecetedComponent, setSelecetedComponent] = useState(null);

  return (
    <>
      <Save scenes={scenes} />
      <ScenesMenu
        scenes={scenes}
        setScenes={setScenes}
        selectedScene={selectedScene}
        setSelectedScene={setSelectedScene}
      />
      <div
        className="wrapper"
        style={{ height: "80vh", background: BACKGROUNDCOLOR, display: "flex" }}
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
          setSelecetedComponent={setSelecetedComponent}
        />
        <Properties
          scenes={scenes}
          setScenes={setScenes}
          selecetedComponent={selecetedComponent}
          scene={scenes[selectedScene]}
        />
      </div>
      {/* <ReactDrag /> */}
    </>
  );
}

export default App;
