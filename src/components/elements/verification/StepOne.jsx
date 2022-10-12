import { Button, FormGroup, FormLabel, Typography ,TextField} from '@mui/material'
import { Box ,InputAdornment} from '@mui/material'
import React from 'react'

export default function StepOne({onNext}) {
  const boxselect={border:"2px solid blue",py:"10px",borderRadius:"5px",mt:'12px'}
  const boxunselect={
    border:"1.8px solid #A6A6A6",
    py:"10px",borderRadius:"5px",mt:"12px"
  }
  const [boxvalue,setboxvalue]=React.useState(boxunselect);


  return (
    <div className='maincontent'>
       <Box className="d-flex justify-content-start">
        <Typography variant="h6" component="div">
          تطبیق اطلاعات هویتی
        </Typography>
       </Box>
       <Box sx={{py:"32px"}}>
        <form>
          <Box className="row" >
            <FormGroup className="col-lg-6 col-12" sx={{mb:"32px"}}>
              <FormLabel>شماره موبایل</FormLabel>
               <TextField
                variant="outlined"
                placeholder="09123456789"
                sx={{pt:"12px"}}

               />
            </FormGroup>
            <FormGroup className="col-lg-3 col-12" sx={{mb:"32px"}}>
              <FormLabel>نام</FormLabel>
               <TextField
                variant="outlined"
                placeholder="پیمان"
                sx={{pt:"12px"}}

               />
            </FormGroup>
            <FormGroup className="col-lg-3 col-12" sx={{mb:"32px"}}>
              <FormLabel>نام خانوادگی</FormLabel>
               <TextField
                variant="outlined"
                placeholder="تهرانی"
                sx={{pt:"12px"}}

               />
            </FormGroup>
          </Box>
          <Box className="row">
            <FormGroup className="col-lg-6 col-12" sx={{mb:"32px"}}>
              <FormLabel>کدملی</FormLabel>
               <TextField
                variant="outlined"
                placeholder="0012345678"
                sx={{pt:"12px"}}
               />
            </FormGroup>
            <FormGroup className="col-lg-6 col-12" sx={{mb:"32px"}}>
              <FormLabel>تاریخ تولد</FormLabel>
               <Box className="d-flex" sx={boxvalue} onFocus={()=>setboxvalue(boxselect)} onBlur={()=>setboxvalue(boxunselect)}>
                 <TextField variant='standard'
                 placeholder='سال'
                 sx={{textAlign:"center",mx:"3%"}}
                 type="tel"
                 InputProps={{
                  disableUnderline: true,
                  endAdornment: <InputAdornment position="end"> / </InputAdornment>,
                 }}/>
                <TextField variant='standard'
                  placeholder='ماه'
                  sx={{textAlign:"center",mx:"3%"}}
                  type="tel"
                 InputProps={{
                  disableUnderline: true,
                  endAdornment: <InputAdornment position="end"> / </InputAdornment>,
                   }} 
                 />    
                <TextField variant='standard'
                  placeholder='روز'
                  type="tel"
                  sx={{textAlign:"center",mx:"3%"}}
                 InputProps={{
                  disableUnderline: true,
                 }} />
               </Box>
            </FormGroup>

          </Box>
          <div className='d-lg-block d-md-none d-sm-none d-none'>
          <Box className="d-flex justify-content-end">
            <Button 
              variant="contained" 
              sx={{ fontSize: 14, backgroundColor: "#424BFB", height: "55px" ,width:"183px",mt:"130px"}}
              onClick={onNext}  
            >
              ثبت و مرحله بعد
            </Button>
          </Box>
        </div>
        <div className='d-lg-none d-md-block d-sm-block d-block'>
           <Box className="d-flex justify-content-end">
            <Button 
                variant="contained" 
                sx={{ fontSize: 14, backgroundColor: "#424BFB", height: "55px" ,width:"100%",mt:"10%",mx:"3%"}}
                onClick={onNext}  
            >
              ثبت و مرحله بعد
            </Button>
          </Box>
        </div>
          
        </form>
       </Box>
    </div>
  )
}
