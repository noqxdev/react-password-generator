import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import Grow from '@mui/material/Grow';
import { SnackbarProvider, useSnackbar } from 'notistack';
import GitHubIcon from '@mui/icons-material/GitHub';
import passwordGenerator from './passwordGenerator';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [checked, setChecked] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const [sliderValue, setSliderValue] = useState(25);
  const [password, setPassword] = useState('');

  const handleClick = () => {
    enqueueSnackbar('Copied to clipboard!', { variant: 'success' });
    navigator.clipboard.writeText(password);
  };

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar('This is a success message!', { variant });
    navigator.clipboard.writeText(password);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    const newPassword = passwordGenerator({ sliderValue: newValue });
    setPassword(newPassword);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>React PasswordGenerator</h1>
            <Slider
              className="custom-slider"
              defaultValue={25}
              aria-label="Default"
              valueLabelDisplay="auto"
              value={sliderValue}
              onChange={handleSliderChange}
            />
            <FormControl>
              <InputLabel htmlFor="component-outlined" shrink>Password</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={password}
                label="Password"
              />
            </FormControl>
            <Button variant="contained" startIcon={<ContentCopyRoundedIcon />} onClick={handleClick}>
              Copy
            </Button>
          </div>
        </Grow>
      </header>
    </div>
  );
}

function IntegrationNotistack() {
  return (
    <SnackbarProvider
      maxSnack={5}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default IntegrationNotistack;