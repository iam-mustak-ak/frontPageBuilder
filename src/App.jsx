import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";


import { theme } from "./theme";
import './index.css';
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formtext from "./pages/Formtext";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return <Provider store={store} >
    <BrowserRouter>
      <MantineProvider theme={theme}>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<Formtext />} />
          </Routes>
        </div>

      </MantineProvider>
    </BrowserRouter>
  </Provider>;
}
