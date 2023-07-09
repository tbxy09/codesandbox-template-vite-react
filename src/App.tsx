import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { RowCard } from "./rowCard";
import { TemplateList, templateList } from "./chatContentInput";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import {Column} from "../types"
import { IPartialTheme } from '@fluentui/react/lib/Styling';


// interface IPalette {
//   themePrimary: string;
//   themeLighterAlt: string;
//   themeLighter: string;
//   themeLight: string;
//   themeTertiary: string;
//   themeSecondary: string;
//   themeDarkAlt: string;
//   themeDark: string;
//   themeDarker: string;
//   neutralLighterAlt: string;
//   neutralLighter: string;
//   neutralLight: string;
//   neutralQuaternaryAlt: string;
//   neutralQuaternary: string;
//   neutralTertiaryAlt: string;
//   neutralTertiary: string;
//   neutralSecondary: string;
//   neutralPrimaryAlt: string;
//   neutralPrimary: string;
//   neutralDark: string;
//   black: string;
//   white: string;
//   colorPaletteRedBackground3: string; // Add the new property here
// }

// const customPalette: Partial<IPalette> = {
//   themePrimary: "#0078d4",
//   themeLighterAlt: "#f3f9fd",
//   themeLighter: "#c7e0f4",
//   themeLight: "#8fb8e8",
//   themeTertiary: "#3a6ea5",
//   themeSecondary: "#004578",
//   themeDarkAlt: "#006cbe",
//   themeDark: "#005a9e",
//   themeDarker: "#004377",
//   neutralLighterAlt: "#f8f8f8",
//   neutralLighter: "#f4f4f4",
//   neutralLight: "#eaeaea",
//   neutralQuaternaryAlt: "#dadada",
//   neutralQuaternary: "#d0d0d0",
//   neutralTertiaryAlt: "#c8c8c8",
//   neutralTertiary: "#c2c2c2",
//   neutralSecondary: "#858585",
//   neutralPrimaryAlt: "#4b4b4b",
//   neutralPrimary: "#333",
//   neutralDark: "#272727",
//   black: "#1d1d1d",
//   white: "#fff",
//   colorPaletteRedBackground3: "#ff0000", // Add the new property here
// };

// function App() {
//   return (
//     <ThemeProvider theme={myTheme}>
//       {/* Your application code here */}
//     </ThemeProvider>
//   );
// }

// export default App;

function App() {
  // const [count, setCount] = useState(0);

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <h2>On CodeSandbox!</h2>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR.
  //       </p>

  //       <p>
  //         Tip: you can use the inspector button next to address bar to click on
  //         components in the preview and open the code in the editor!
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </div>
  // );
  // const customTheme: IPartialTheme = createTheme({
  //   palette: customPalette,
  // });
  const handleTemplateSelect = () => {};
  const handleAddTemplate = () => {};
  //     <ThemeProvider theme={myTheme}>
  //       {/* Your application code here */}
  //     </ThemeProvider>
  const columns: Column[] = [
    { key: "name", label: "Name" },
    { key: "version", label: "Version" },
    { key: "description", label: "Description" },
    { key: "created_at", label: "Created at" },
    { key: "updated_at", label: "Updated at" },
  ];
  return (
    <div>
    <FluentProvider theme={webLightTheme}>
        <p>{templateList[0].name?.value?.toString()}</p>
        <RowCard
          items={templateList}
          onSelect={handleTemplateSelect}
          type="textarea"
        />
        <RowCard
          items={templateList}
          onSelect={handleTemplateSelect}
          columns={columns}
          type="table"
        />
      </FluentProvider>,
      </div>
  );
}

export default App;
