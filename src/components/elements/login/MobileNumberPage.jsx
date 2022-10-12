import React from 'react'
import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'

export default function MobileNumberPage({send}) {
    const labelStyle={
        fontSize:"13px"
       }
       const textfieldstyle={
        pt:"12px",
        height:"56px",
        fontSize:"13px",
       }
  return (
        <Box sx={{pt:"10.3%"}}>
         <Typography variant="p" component="div" sx={{py:"48px",px:"55px",fontSize:"20px"}}>
          ورود | ثبت نام
          </Typography>
          <form>
             <FormGroup sx={{mb:"32px",px:"6%"}}>
               <FormLabel sx={labelStyle}>شماره موبایل</FormLabel>
               <TextField
                 variant="outlined"
                 placeholder="09123456789"
                 sx={textfieldstyle}
               />
             </FormGroup>
             <Box sx={{px:"6%"}}>
             <Button  onClick={send}  variant="contained" sx={{height:"55px" ,backgroundColor:"#424BFB"}}  fullWidth >
                  ورود
             </Button>
             </Box>
                </form>
                <Box className="text-center" sx={{pb:"32px",pt:"36%"}}>
                  <Typography variant="p" component="div" fontSize="16px" >
                  &#169; تمام حقوق این پلتفرم محفوظ میباشد 
                  </Typography>
                  </Box>
           </Box>
  )
}
