// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ElementiTabele from './components/ElementiTabele';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MyForm from './components/MyForm';
import ExtendedForm from './components/ExtendedForm';
import FormWithYup from './components/FormWithYup';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import TemporaryDrawer from './components/TemporaryDrawer';
import Layout from './shell/Layout';
import Orders from './components/Orders';



function App() {
  // const [counter, setCounter] = React.useState(0);
  // const incrementer = () => setCounter((previousValue) => previousValue + 1);
  // function incrementer2() {
  //   setCounter((previousState) => previousState + 1);
  // }

  

  const jsxElement =
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MyForm />} />
          <Route path="/extended" element={<ExtendedForm />} />
          <Route path="/yup" element={<FormWithYup />} />
          <Route path="/tabela" element={<ElementiTabele />} />
          <Route path="/drawer" element={<TemporaryDrawer />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  ;
  return jsxElement;
}


//export default function App() {
function App1() {
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

  return (
/* <ThemeProvider theme={darkTheme}>
      <CssBaseline />     */
    <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 500,
        margin: 'auto',
        marginTop: 8,
      }}
    >

      {/* <TextField label="Name" variant="outlined" />
      <TextField label="Email" variant="outlined" />
      <Button variant="contained">Submit</Button> */}
      {/* <ElementiTabele /> */}
    </Box>
    {/* <MyForm /> */}
    <ExtendedForm />
    <FormWithYup />
    </>
    // </ThemeProvider>
  );
}
export default App;