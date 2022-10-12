import React from 'react'
import { Button, Box, Typography } from '@mui/material'
import {  Info } from '@mui/icons-material';
import BuyFee from '../dialogs/BuyFee';

export default function FormInfo({ listdata, title,description,finalvalue,options}) {
  const [open, setopen] = React.useState(false);
  const handleOpenDialog=(event)=>{
   setopen(true);
  }
  const handleClose=(event)=>{
    setopen(false);
  }
  return (
    <Box component="div" sx={{ textAlign: 'left' }}>
     {title? <Typography variant="h5" component="div">
      {title}
      </Typography>:<div></div>}
     
      {listdata.map((item, idx) => (
        <div className='d-flex justify-content-between info-list'>
          <Typography variant="p" component="div" sx={{fontSize : "14px"}}>
            {item.name}
          </Typography>
          <hr />
          <Typography variant="p" component="div"  sx={{fontSize : "14px"}}>
            {item.price}
          </Typography>
        </div>
      ))}
      {description?<div>
        <div style={{paddingTop:'32px'}}>
        <Button startIcon={<Info />} onClick={handleOpenDialog} sx={{ height: '72px' , backgroundColor: "#EAEEFF" , border: "1px solid rgba(163, 174, 228,1)" , borderRadius : "8px"}} variant="outlined" fullWidth size="large" >
          توضیح کامل در خصوص کارمزد
        </Button>
      </div>
       {finalvalue? <div style={{paddingTop:'95px'}}>
        <Box sx={{ backgroundColor: 'rgba(243, 244, 249, 1)', borderRadius: "8px" ,height:"55px"}}>
          <div className='d-flex justify-content-between py-3 px-3'>
            <Typography variant="p" component="div">
              مبلغ پرداخت نهایی
            </Typography>
            <Typography variant="p" component="div">
              {finalvalue}
            </Typography>
          </div>
        </Box>
      </div>:<div></div>}

      </div>:<div></div>}
        <BuyFee open={open} close={handleClose} listdata={listdata} optionsdata={options}/> 
    </Box >
  )
}
