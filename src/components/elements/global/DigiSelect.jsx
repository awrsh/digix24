import React from 'react'
import { TextField,InputAdornment ,MenuItem,Box,Select} from '@mui/material';
import {Search} from '@mui/icons-material'
import Svg from '../../utils/Svgs';
export default function DigiSelect({options}) {
   const [optionstate, setoptionstate] = React.useState(options);
   const [open, setopen] = React.useState(false)
   const [search, setsearch] = React.useState("");
   const [isSearch, setisSearch] = React.useState(false);

  
   const handleSearch=(event)=>{
    setoptionstate(
        options.filter((item)=>{
            if(item.label===event.target.value){
                return item
            }
            else{
              setisSearch(false)
            }
        })
    )
   }
   const handleClose=(event)=>{
    if(isSearch==false){
      setopen(false);
      setoptionstate(options);
    }
    else{
      setopen(true);
      setoptionstate(options)
    }
}

  return (
    <div>
        <Select
            fullWidth
            open={open}
            onOpen={()=>setopen(true)}
            onClose={handleClose}
            defaultValue={optionstate[0]}
            >
            {options.length >=4 && <TextField 
            sx={{width:"96%",mr:"2%",my:"2%"}}
            size="small"
            onFocus={()=> setisSearch(true)} 
            onBlur={()=>setisSearch(false)}  
            value={search} onChange={handleSearch}
             InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                     <Search/>
                  </InputAdornment>
                ),
              }}
            />}
            {optionstate.length 
            ? 
            (optionstate.map((item,idx)=>(
                <MenuItem key={idx} value={item.label} sx={{textAlign:"left"}}>
                 <div className="d-flex justify-content-start">
                    <Svg Component={item.icon} />
                    <div>{item.label}</div>
                  </div>
                </MenuItem>
            )))
            :<Box sx={{py:"2%",textAlign:"center",fontWeight:"bold",fontSize:"14px"}}> 
             <p>هیچ آیتمی وجود ندارد</p>
            </Box>}
        </Select>
    </div>
   
  )
}
