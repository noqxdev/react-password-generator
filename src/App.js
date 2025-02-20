import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider, { sliderClasses } from '@mui/material/Slider';
import Button from '@mui/material/Button';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import Grow from '@mui/material/Grow';
import { SnackbarProvider, useSnackbar } from 'notistack';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  const [checked, setChecked] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
   const [sliderValue, setSliderValue] = useState(sliderValue);

  const handleClick = () => {
    enqueueSnackbar('Copied to clipboard!', { variant: 'success' });
  };

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar('This is a success message!', { variant });
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
            <Slider className="custom-slider" defaultValue={25} aria-label="Default" valueLabelDisplay="auto" value={sliderValue} />
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
      <App />
    </SnackbarProvider>
  );
}

export default IntegrationNotistack;