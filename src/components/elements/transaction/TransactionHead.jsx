import { MenuItem, Select,FormGroup } from '@mui/material'
import React from 'react'

export default function TransactionHead() {
  const dates = [
    {"value":1,"label":"انتخاب تاریخ"},
  ]
  const stateopt = [
    {"value":1,"label":"وضعیت"},
  ]
  const selectstyle={
    width:"176px",
    height:"56px",
    marginRight:'33px',
    marginTop:"32px",
    marginTop:"19px",
    backgroundColor:'#fff'
  }
  return (
    <div className='row d-flex justify-content-start bg-light content-dashboard'>
          <div className='col-lg-5 col-12 d-flex justify-content-between'>
          <Select sx={selectstyle} defaultValue={dates[0]['label']}>
            {dates.map((item,idx)=>(
                <MenuItem key={idx} value={item.label}>{item.label}</MenuItem>
            ))}
            </Select>
            <Select sx={selectstyle} defaultValue={stateopt[0]['label']}>
            {stateopt.map((item,idx)=>(
                <MenuItem key={idx} value={item.label}>{item.label}</MenuItem>
            ))}
            </Select>
          </div>
            
    </div>
  )
}
