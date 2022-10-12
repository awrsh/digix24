import React from 'react'
import { Typography, Box, Button } from '@mui/material';
import { Menu, SouthWest, ArrowUpwardOutlined } from '@mui/icons-material';

export default function DashboardInfo() {
  const btnStyle = {
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "1px solid rgba(203, 228, 235, 1)",
    borderRadius: "8px",
    height: "43px",
    fontSize:"13px",
  }
  return (
    <div className='row bg-light align-items-end info-content'>
      <div className='col-lg-6 col-12'>
        <Box className='d-flex'>
          <Box>
            <Typography variant='p' fontSize={14} component="div">
              موجودی کل حساب شما
            </Typography>
            <br />
            <Typography variant="p" fontSize={20} component="div">
              ۸۷۳,۰۸۳,۳۰۰ تومان
            </Typography>

          </Box>
          <Box className='pt-4 mt-2 px-4 green-color'>
            <p style={{color:'#1ed184',fontSize:'12px'}}>٪۲۴ <ArrowUpwardOutlined/>
            <br/>نسبت به روز گدشته</p>
          </Box>
        </Box>
      </div>
      <div className='col-lg-6 col-12'>
        <div className='row'>
          <div className='col-lg-3 col-md-3 col-6 py-2'>
            <Button variant="outlined" className='justify-content-evenly' style={btnStyle} fullWidth color="inherit" ><SouthWest style={{ fill: 'rgba(164, 166, 180, 1)' }} />واریزپول</Button>
          </div>
          <div className='col-lg-4 col-md-4 col-6 py-2'>
            <Button variant="outlined" className='justify-content-evenly' style={btnStyle} fullWidth color="inherit" ><SouthWest style={{ fill: 'rgba(164, 166, 180, 1)' }} />برداشت‌تومان</Button>
          </div>
          <div className='col-lg-5 col-md-5 col-12 py-2'>
            <Button variant="outlined" className='justify-content-evenly' style={btnStyle} fullWidth color="inherit"  ><Menu style={{ fill: 'rgba(164, 166, 180, 1)' }} />تاریخچه‌تراکنش‌ها</Button>
          </div>
        </div>
      </div>
    </div>
  )
}