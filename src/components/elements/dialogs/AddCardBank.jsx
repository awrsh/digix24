import React from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import {  Box,InputAdornment ,FormGroup, TextField} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };


export default function AddCardBank({open,close}) {

  const [issmall, setissmall] = React.useState(false);

   const textfieldstyle={
    mt:"12px",
    fontSize:"13px",
    mx:"2%",
   }
   React.useEffect(() => {
    if (window.innerWidth < 700) {
      setissmall(true)
    }
   else {
    setissmall(false)
   }
   });
   
  return (
      <BootstrapDialog
       fullScreen={issmall?true:false}
        sx={{direction:"ltr"}}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom-bold">
        افزودن کارت بانکی جدید
                 </BootstrapDialogTitle>
        <DialogContent  sx={{width:"100%"}}>
            <Typography variant="p" component="div" sx={{my:"3%"}}>
            حتما کارت بانکی ای را ثبت کنید که به نام صاحب حساب کاربری (خودتان) باشد، در غیر اینصورت بصورت اتوماتیک رد خواهد شد.
            </Typography>
          <Box sx={{borderRadius:"14px"}}>
           <Box className="border-right-marginboldblue px-1">
                <Typography variant="p" component="div" fontSize="13px">
                      شماره کارت بانکی
                </Typography>
                </Box>
            <Box>
            <FormGroup sx={{mb:"6%"}}>
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

             <Box className="border-right-marginboldblue px-1 py-1 my-2">
               <Typography variant="p" component="div" fontSize="13px">
                  شماره‌شبا 
              </Typography>
               </Box>
               <FormGroup sx={{mb:"4%",mx:"2%"}}>
                    <TextField 
                      fullWidth
                      type="tel"
                      InputProps={{
                        endAdornment: <InputAdornment position="end">IR</InputAdornment>,
                      }}
                    />
               </FormGroup>
            </Box>    
             <Box sx={{px:"2%"}}>
             <Button variant="contained" sx={{ fontSize: "16px", backgroundColor: "#424BFB", height: "55px" }} fullWidth>
                ثبت کارت بانکی جدید
             </Button>
             </Box>
             
          </Box>
        </DialogContent>
      </BootstrapDialog>
  )
}
