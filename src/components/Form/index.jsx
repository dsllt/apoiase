import { Container } from './styles'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export function Form(){
  return(
    <div className='Form'>
      <ButtonGroup variant="contained" color='secondary' >
        <Button sx={{color:'white'}}><ArrowDropDownIcon/></Button>
        <Button sx={{color:'white'}}>Postar agora</Button>
      </ButtonGroup>
    </div>
  )
}