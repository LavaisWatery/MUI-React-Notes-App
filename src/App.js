import { colors, createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";

// Customize our theme, new secondary color, new font (this needs to be added in index.css)
const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500]
    }
  },
  typography: {
    fontFamily: "Quicksand",
    fontSize: 16,
  }
});

function App() {
    // Set our theme
    // Router and routes
    return (
    <ThemeProvider theme={theme}>
      <Header/> 

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/create' element={<CreatePage/>}/>
          <Route path='/list' element={<ListPage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
