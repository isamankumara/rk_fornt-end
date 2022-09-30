import React from "react";
import { MainRoute } from "./routes/route";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import  store  from "./store";
import { Provider } from "react-redux";
const theme = createTheme({ palette: { primary: { main: "#67B6A8", contrastText: "white" } } });

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <MainRoute />
            </Provider>
        </ThemeProvider>
    );
}

export default App;
