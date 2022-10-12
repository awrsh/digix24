import React from 'react'
import StepOne from '../elements/verification/StepOne';
import StepThree from '../elements/verification/StepThree';
import StepTwo from '../elements/verification/StepTwo';
import { Stepper,Step,Typography,Box } from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import StepLabel ,{stepLabelClasses} from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';

const MyStepConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'rgba(81, 184, 168, 1)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'rgba(81, 184, 168, 1)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    border:"1px solid rgba(193, 194, 220, 1)",
  },
}));


export default function Verification() {
  
  const steps = ['تطبیق اطلاعات هویتی', 'قبول قوانین', 'بارگذاری مدارک'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
   
  const handleNext=()=>{
    setActiveStep((newStep)=>newStep+1);
    console.log(activeStep)
  }

  return (
    <div>
      <div className='d-lg-block d-none'>
      <Box sx={{pt:"62px",pb:"32px",px:"10%"}} className="row d-flex justify-content-center bg-light">
      <Stepper activeStep={activeStep}
        connector={<MyStepConnector />}
      >
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} >
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
            </Stepper>
      </Box>
      </div>
      <div className='d-lg-none d-block'>
      <Box sx={{pt:"62px",pb:"32px",px:"1%"}} className="row d-flex justify-content-center bg-light">
      <Stepper activeStep={activeStep}
        connector={<MyStepConnector />}
      >
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} >
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
            </Stepper>
      </Box>
      </div>
      
            
      <Box sx={{p:"32px"}}>
        {activeStep === 0 &&  <StepOne onNext={handleNext}/>}
        {activeStep === 1 &&  <StepTwo onNext={handleNext}/>}
        {activeStep === 2 &&  <StepThree onNext={handleNext}/>}

      </Box>
    </div>
  )
}
