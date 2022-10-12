import React from 'react'
import {Button,Box,Typography,Toolbar,AppBar,IconButton, Badge,List,ListItem,ListItemText,ListItemIcon} from '@mui/material'
import AlarmIcon from '@mui/icons-material/Notifications'
import {Person,Menu,Close,ExpandMore} from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import SidebarMobileMenu from './SidebarMobileMenu';
import { useNavigate } from 'react-router-dom';
export default function Navbar({isSide,LoadSide}) {
  let navigate =useNavigate()
  const [heightValue, setheightValue] = React.useState("83px");
  const [isload, setisload] = React.useState(false);
  const appbarstyle={
    backgroundColor:"rgba(255, 255, 255, 1)",
    height:heightValue,
    borderBottom: "1px solid rgba(203, 228, 235, 1)",
    pt:"10px"
  }
  const LoadNavMobile=(event)=>{
      if(isload){
        setheightValue("83px");
        setisload(false);
      }
      else{
          setheightValue("100%");
          setisload(true)
      }
  }
  const userbtnstyle={
    fontSize:"12px",
    '& .MuiListItemText-secondary':{
      color:"gold",
      fontSize:"11px",
    }
  }
  const goLogin=(event)=>{
      navigate('/login')
  }
  return (
    <Box sx={{ flexGrow: 1 ,direction:'ltr',width:'100%'}}>
        <AppBar position='fixed' elevation={0}  sx={appbarstyle}>
        <Toolbar>
        <div className='d-lg-none d-sm-block d-md-none'>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,color:"#0642df" }}
            onClick={LoadNavMobile}
          >
            {isload ?<Close/>:<Menu/>}
          </IconButton> 
        </div> 
        <div className='d-lg-block d-none d-sm-none d-md-block'>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={LoadSide}
          >
            {isSide ?<Close sx={{color:"#0642df"}}/>:<Menu sx={{color:'#0642df'}}/>}
          </IconButton> 
        </div>   
        
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,color:'#0642df'}}>
         دیجیکس۲۴
       </Typography>
       <IconButton dir='rtl'>
        <Badge color='primary' badgeContent={5} anchorOrigin={{vertical: 'top',horizontal: 'left',}}>
        <AlarmIcon />
        </Badge>
        </IconButton>
        <div className='d-none d-sm-none d-md-none d-lg-block text-dark'>
          <List>
            <ListItem button sx={{height:"40px",borderRadius:"40px"}} onClick={goLogin}>
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="حسین اسدزاده" secondary="کاربر طلایی" sx={userbtnstyle}/>
              <ListItemIcon sx={{pl:"4%"}}>
                <ExpandMore/>
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
        <div className='d-lg-none d-flex'>
          <IconButton  size="small" onClick={goLogin}><Person/></IconButton>
        </div>
        </Toolbar>
        {isload && 
          <SidebarMobileMenu heightSize={LoadNavMobile}/>
        }
        </AppBar>
    </Box>
  )
}
