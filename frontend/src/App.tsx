import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import {ThemeProvider} from "@mui/material";

import {createTheme, responsiveFontSizes} from '@mui/material/styles';
import {MainPage} from './components/MainPage/MainPage';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFoundPage} from "./NotFoundPage";
import {AgencyDetailPage} from "./components/AgencyDetail/AgencyDetailPage";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function App() {
  return <ThemeProvider theme={theme}>
    <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'},}}/>
    <CssBaseline/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/agency/:id" element={<AgencyDetailPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
}
