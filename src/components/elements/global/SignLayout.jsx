import React from 'react'
import { Box, Typography ,MobileStepper} from '@mui/material'

const stepSlides=[
  {'name':"مهران صبوری",'text':"یکی از بهترین صرافی ها با قیمت های خوب و رابط کاربری آسان هست که دارم باهاشون معامله میکنم و راضی هستم."},
  {'name':"آرش زرندی",'text':"من از این صرافی برای معاملات خودم استفاده میکنم و بسیار راضی هستم"},
  {'name':"مهران صبوری",'text':"یکی از بهترین صرافی ها با قیمت های خوب و رابط کاربری آسان هست که دارم باهاشون معامله میکنم و راضی هستم."}
]
export default function SignLayout({children}) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  
  React.useEffect(()=>{
     setInterval(()=>{
        if(activeStep<2){
            setActiveStep(activeStep+1);
        }else{
          setActiveStep(0);
        }
     },12000)
  },[activeStep]);

      const boxstyle={
        borderRadius:"20px",
        ml:"6%",
        mr:"9%",
        mt:"80px",
        height:"163px",
        backgroundColor:"rgba(46, 67, 228, 1)",
        py:"32px",
        pl:"32px",
        pr:"57px"
      }
      const mobstepstyle={
         my:"5%",
         height:"20px",
         width:"70px",
         backgroundColor:"#424BFB",
         '& .MuiMobileStepper-dotActive':{
              backgroundColor:"#fff"
         }

      }
  return (
    <div className='container-fluid ' >
    <Box className="row" dir="rtl">
      
      <Box className="col-lg-6 col-md-6 d-lg-block d-md-block d-sm-none d-none" sx={{backgroundColor:"#424BFB",pt:"5%",height:"100vh"}}>
           <Box sx={{pl:"7%"}}>
           <Typography variant="p" compoent="div" sx={{color:"#fff",textAlign:"center",fontSize:"42px"}}>
           با بهترین قیمت و سرعت بالا معامله کنید
           </Typography>
           </Box>
           <Box sx={{pl:"7%",pr:"11%",pt:"48px"}}>
             <Typography variant="p" component="div" sx={{color:"#fff",fontSize:"13.4px"}}>
             با هر معامله، بخشی از معامله شما به کیف پولتان به عنوان هدیه (Cash Back) واریز میگردد که میتوانید در معاملات آتی از آن استفاده نمایید.
             </Typography>
           </Box>
           
           <Box sx={boxstyle}>
            <Box sx={{textAlign:"left"}}>
                <Typography variant="p" component="div" sx={{color:"#fff",fontSize:"12px"}}>
                {stepSlides[activeStep]['text']}
                </Typography>
                <Typography variant="b" component="div" sx={{pt:"38px",fontSize:"14px",color:"#fff"}}>
                    {stepSlides[activeStep]['name']}
                </Typography>
              </Box>
           </Box>
           <Box className="d-flex justify-content-center">
             <MobileStepper
              sx={mobstepstyle}
                position='static'
                steps={3}
                activeStep={activeStep}
              /> 
           </Box>
           
         
    </Box>
    <Box className="col-lg-6 col-md-6 col-12" sx={{height:"100vh"}}>
             {children}
        
     </Box>
    </Box>
    </div>
    )
}
