import { BiChevronDown, BiChevronUp, BiChevronRight } from 'react-icons/bi'

import { Container, Menu } from './styles'

import { ButtonHeader } from '../ButtonHeader'

export function Header(){
  return(
    <Container>
      <Menu>
        <img src="/src/assets/Logo.svg" alt='Logo apoia.se' id='logo-svg'/>

        <ButtonHeader title='Produto'> <BiChevronDown /> </ButtonHeader>
        <ButtonHeader title='Recursos'> <BiChevronDown /> </ButtonHeader>

      </Menu>

      <ButtonHeader title='Acessar Minha Conta'> <BiChevronRight /> </ButtonHeader>

    </Container>
  )
}


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// import LogoSvg from '../../assets/logo_UI';

// const pages = ['Produto', 'Recursos', 'Acessar Minha Conta'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// export function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" color='transparent'>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//         <Box
//           component="img"
//           sx={{
//             height: 30,
//             width: 176,
//             fill: ''
//           }}
//           alt="Logo"
//           src="/src/assets/Logo.svg"
//           color='coral'
//         />
//         <LogoSvg/>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>


//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
