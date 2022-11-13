import React from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const options = ['Postar agora', 'Agendar postagem'];

export function SelectionButton(){
  
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };


  return(
    <div className='SelectionButton'>
      {selectedIndex === 1 && 
        <Stack
          direction='column'
          sx={{border:1, borderRadius: 2, borderColor: '#E0E0E0', marginBottom:2, padding: 2}}
        >
          <TextField
          id="date"
          label="Data"
          type="date"
          defaultValue="2022-11-01"
          sx={{ width: 220 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          size="sm"
          />
          <TextField
            id="time"
            label="Hora"
            type="time"
            defaultValue="07:30"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: 150 }}
            size="sm"
          />
          <Typography align='center' sx={{color:'gray'}}>Horário de Brasília</Typography>
        </Stack>
      }

      <ButtonGroup 
        variant="contained" 
        ref={anchorRef}
        aria-label="split button"
        color='secondary'
      >
        <Button 
          sx={{color:'white'}} 
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon/>
        </Button>
        <Button sx={{color:'white'}}onClick={handleClick}>{options[selectedIndex]}</Button>
      </ButtonGroup>

      <Popper
        sx={{
          zIndex: 1
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))} 
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

    </div>
  )
}