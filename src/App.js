import { colors, createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import Spam from "./pages/SpamPage";
import TableList from "./pages/TableListPage";

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
      <BrowserRouter>
        <SiteLayout>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/create' element={<CreatePage/>}/>
            <Route path='/list' element={<ListPage/>}/>
            <Route path='/tablelist' element={<TableList/>}/>
            <Route path='/spam' element={<Spam/>}/>
          </Routes>
        </SiteLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
