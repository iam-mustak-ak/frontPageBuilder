import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Formtext from "./pages/Formtext";
import Home from "./pages/Home";
import store from "./redux/store";
import { theme } from "./theme";

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <MantineProvider theme={theme}>
                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/:name" element={<Formtext />} />
                        </Routes>
                    </div>
                </MantineProvider>
            </BrowserRouter>
        </Provider>
    );
}
