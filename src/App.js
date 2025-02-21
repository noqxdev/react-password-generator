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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';

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
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const handleClick = () => {
    enqueueSnackbar('Copied to clipboard!', { variant: 'success' });
    navigator.clipboard.writeText(password);
  };

  const regeneratePassword = (event, newValue) => {
    enqueueSnackbar('Regenerated Password!', { variant: 'info' });
    const newPassword = passwordGenerator({ sliderValue, includeSpecialChars });
    setPassword(newPassword);
  };

  window.onload = function () {
    const newPassword = passwordGenerator({ sliderValue, includeSpecialChars });
    setPassword(newPassword);
  }

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar('This is a success message!', { variant });
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    const newPassword = passwordGenerator({ sliderValue: newValue, includeSpecialChars });
    setPassword(newPassword);
  };

  const handleCheckboxChange = (event) => {
    setIncludeSpecialChars(event.target.checked);
    const newPassword = passwordGenerator({ sliderValue, includeSpecialChars: event.target.checked });
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
            <h5>Password Generator</h5>
                        <FormControl>
              <InputLabel htmlFor="component-outlined" shrink>Password</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={password}
                label="Password"
                className="outlined-input"
              />
            </FormControl>
            <Slider
              className="custom-slider"
              defaultValue={16}
              min={8}
              max={64}
              aria-label="Default"
              valueLabelDisplay="auto"
              value={sliderValue}
              onChange={handleSliderChange}
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={includeSpecialChars} onChange={handleCheckboxChange} />}
                label="Special Characters !@#$%^&*()_+"
              />
            </FormGroup>
            <br></br>
            <Button variant="contained" startIcon={<ContentCopyRoundedIcon />} onClick={handleClick}>
              Copy
            </Button>
            <br></br>  <br></br>
            <Button variant="contained" startIcon={<LoopOutlinedIcon />} onClick={regeneratePassword}>
              Regenerate
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
      maxSnack={3}
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