import React from 'react'
import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIos } from '@mui/icons-material'
export default function SecureCodePage({send}) {

    const labelStyle={
        fontSize:"13px"
       }
       const textfieldstyle={
        pt:"12px",
        height:"48px",
        fontSize:"13px",
        mx:"2%",
       }
  return (
    <Box sx={{pt:"10.3%"}}>
              <Box className="d-flex justify-content-between" sx={{py:"27px",px:"6%"}}>
                <Typography variant="h5" component="div" sx={{fontSize:"20px"}}>
                کد تایید شماره موبایل
                </Typography>
                <Button onClick={send} size="small" endIcon={<ArrowBackIos/>}>
                      بازگشت      
                </Button>
              </Box>
     
          <form>
             <FormGroup sx={{mb:"4%",px:"4%"}}>
               <FormLabel sx={labelStyle}>
               کد تایید به شماره موبایل ۰۹۱۲۵۷۷۶۵۹۸ ارسال شد.
               </FormLabel>
               <Box className="d-flex">

               <TextField
                 variant="outlined"
                 sx={textfieldstyle}
                 />
                <TextField
                 variant="outlined"
                 sx={textfieldstyle}
                 />
                 <TextField
                 variant="outlined"
                 sx={textfieldstyle}
                 />
                 <TextField
                 variant="outlined"
                 sx={textfieldstyle}
                 />
               </Box>
               
             </FormGroup>
             <Box sx={{px:"6%"}}>
              <Box className='d-flex justify-content-between' sx={{py:"2%",px:"3%"}}>
                  <FormLabel sx={labelStyle} className="mt-2">
                    مهلت استفاده کد: ۰۰:۴۸
                    </FormLabel>
               <Button size="small">
               ارسال مجدد کد      
                </Button>
              </Box>
             <Button variant="contained" sx={{height:"55px" ,backgroundColor:"#424BFB"}}  fullWidth>
                  بررسی 
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
