import React from 'react';
import { useState, useRef } from 'react'

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

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const options = ['Postar agora', 'Agendar postagem'];

export function SelectionButton({dateTime}){
  
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [date, setDate] = useState("2022-11-01");
  const [time, setTime] = useState("07:30");

  const [openDialog, setOpenDialog] = useState(false);

  const anchorRef = useRef(null);

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
  function handleChageDate(event){
    setDate(event.target.value);
  }
  function handleChageTime(event){
    setTime(event.target.value);
  }

  function handleClickSubmit(){
    setOpenDialog(true);
  }
  function handleCloseSubmit(){
    setOpenDialog(false);
  }

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
            sx={{ width: 220 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            size="sm"
            value={date}
            onChange={handleChageDate}
          />
          <TextField
            id="time"
            label="Hora"
            type="time"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: 150 }}
            size="sm"
            value={time}
            onChange={handleChageTime}
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
        <Button 
          sx={{color:'white'}} 
          onClick={
            () => {
              handleClickSubmit()
              let option = options[selectedIndex];
              dateTime({date, time, option});
            }
          } 
          type='submit'
        >
          {options[selectedIndex]}
        </Button>
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

      <Dialog
        open={openDialog}
        onClose={handleCloseSubmit}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle 
          id="alert-dialog-title" 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 'auto'
          }}
        >
          {"Tudo pronto!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" >
          Sua postagem está agendada para {date} ás {time}
          </DialogContentText>
        </DialogContent>
        <DialogActions 
          sx={{
          display: 'flex',
          flexDirection: 'column',
          m: 'auto'
        }}
        >
          <Button 
            onClick={handleCloseSubmit} 
            autoFocus 
            color='secondary' 
            variant="contained" 
            sx={{color:'white'}} 
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}