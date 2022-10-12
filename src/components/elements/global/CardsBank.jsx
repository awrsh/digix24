import React from 'react'
import {Box,Button ,List,ListItem,ListItemText,ListItemIcon,IconButton} from '@mui/material'
import { Delete, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import AddCardBank from '../dialogs/AddCardBank';
import { Add } from '@mui/icons-material'
export default function CardsBank() {

  const [open,setOpen]=React.useState(false);
  const [show,setShow]=React.useState(false);


  const opendialog=(event)=>{
    setOpen(true);
  }
  const closedialog=(event)=>{
    setOpen(false);
  }
  const handleArrow=(event)=>{
    if(show){
      setShow(false)
    }
    else{
      setShow(true);
    }
  }
  const listdata=[
    {'bank':"بانک سامان",'number':"6104 3373 9150 8790"},
    {'bank':"بانک سامان",'number':"6104 3373 9150 8790"},

  ]
  
    const cardstyle={
        width: '100%',
        height: '100%',
        border: '2px solid rgba(203, 228, 235, 1)',
        backgroundColor: '#fff',
        borderRadius: '8px'
      }
      const btnstyle={
        width: '100%',
        height: '57px',
        borderRadius: '0px 0px 8px 8px',
        bottom:"0px",
        backgroundColor:'#e8ebef',
        color: "#000",
        '&:hover': {
          backgroundColor:'#e8ebef',
          color: "#000",
       },
      }
  return (
    <Box sx={cardstyle}>
         <List sx={{p:"1%"}}>
            <ListItem onClick={handleArrow} button>
                <ListItemText primary="بانک سامان"/>
                <ListItemText primary="6104 3373 9150 8790" />
                    <ListItemIcon>
                     {show?<KeyboardArrowUp/>:<KeyboardArrowDown/>}
                    </ListItemIcon>
            </ListItem>
           {show? listdata.map((item,idx)=>(
            <ListItem key={idx} className="bordertop-bold">
                <ListItemText primary={item.bank}/>
                <ListItemText primary={item.number} />
                    <ListItemIcon>
                      <IconButton>
                      <Delete />
                        </IconButton>
                    </ListItemIcon>
            </ListItem>
           )):null}
        </List>
        <Button sx={btnstyle} startIcon={<Add/>} onClick={opendialog}>
            افزودن کارت بانکی
        </Button>
        <AddCardBank open={open} close={closedialog}/>
    </Box>
  )
}
