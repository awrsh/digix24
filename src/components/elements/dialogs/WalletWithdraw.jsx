import React from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import {  Box ,Checkbox,FormGroup,FormControlLabel,Divider} from '@mui/material'
import { ContentCopy, QrCode} from '@mui/icons-material';
import { CheckCircle,RadioButtonUnchecked } from '@mui/icons-material';
import DigiSelect from '../global/DigiSelect';

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


const boxselected={
  border:"1.5px solid #424BFB",borderRadius:"7px",my:"1%",height:"50px",mx:"2%",pl:"2%",backgroundColor:"rgb(211, 245, 255)",
}
const boxunselected={
  border:"1.5px solid #A6A6A6",borderRadius:"7px",my:"1%",height:"50px",mx:"2%",pl:"2%",
}

const walletboxstyle={
  height: '57px',
  backgroundColor:"lightgrey",
  border:"1px solid rgba(203, 228, 235, 1)",
  borderRadius:"8px",
  p:"3%",
  my:"2%"
}
const codeboxstyle={
    height: '57px',
    border:"1px solid rgba(203, 228, 235, 1)",
    borderRadius:"8px",
    p:"3%",
    my:"2%"
  }

const subbtnstyle={
  fontSize:"16px", backgroundColor: "#424BFB", height: "55px"
}
export default function WalletWithdraw({open,close,options}) {

  const [issmall, setissmall] = React.useState(false);
  const [withdraw,setWithdraw]=React.useState("")
  const [coin,setCoin]=React.useState("")
  
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
        fullScreen
        sx={issmall?{direction:"ltr"}:{direction:"ltr",width:"500px"}}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom-bold">
            واریز ارز به کیف پول
        </BootstrapDialogTitle>
        
        <DialogContent>
        
        <Box className="border-right-marginboldblue" sx={{px:"1%",mt:"3%"}}>
           <Typography variant="p" component="div" fontSize="13px">
                انتخاب  ارز
           </Typography>
         </Box>
        <Box sx={{pb:"1%"}}>
            <DigiSelect options={options}/>
        </Box>
         <Box className="border-right-marginboldblue" sx={{px:"1%"}}>
           <Typography variant="p" component="div" fontSize="13px">
                انتخاب شبکه پرداخت
           </Typography>
         </Box>
         <Box className="d-flex justify-content-start" sx={{pb:"2%"}}>
         <Box sx={coin==="erc-20"?boxselected:boxunselected}>
            <FormGroup>
              <FormControlLabel 
                control={<Checkbox checked={coin==="erc-20"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />} 
                onClick={()=>setCoin("erc-20")} label="ERC-20"
              />
            </FormGroup>
          </Box>
          <Box sx={coin==="trc-20"?boxselected:boxunselected}>
            <FormGroup>
            <FormControlLabel 
              control={<Checkbox checked={coin==="trc-20"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />} 
              onClick={()=>setCoin("trc-20")} label="TRC-20" 
            />
            </FormGroup>
          </Box>
          <Box sx={coin==="bep-20"?boxselected:boxunselected}>
            <FormGroup>
            <FormControlLabel 
              control={<Checkbox checked={coin==="bep-20"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />} 
              onClick={()=>setCoin("bep-20")} label="BEP-20" 
            />
            </FormGroup>
          </Box>
         </Box>
         <Box className="border-right-marginboldblue" sx={{px:"1%"}}>
           <Typography variant="p" component="div" fontSize="13px">
                مقدار 250تتر به آدرس ولت زیر ارسال کنید
           </Typography>
         </Box>
         <Box sx={{pb:"2%",px:"1%"}}>
          <Box className="d-flex justify-content-between" sx={walletboxstyle}>
            <Typography variant="p" component="div">
                TPNFDKDJDMrjgkdnskfk763mfkdhgjd83h
            </Typography>
            <Box className="d-flex">
                <IconButton sx={{mx:"1%"}}>
                <ContentCopy/>
                </IconButton>
                <IconButton sx={{mx:"1%"}}>
                <QrCode/>
                </IconButton>
            </Box>
          </Box>
         </Box>

         <Box sx={{px:"1%"}}>
           <Typography variant="p" component="div" fontSize="13px">
                ارز موردنظر را به آدرس ولت زیر ارسال کنید
           </Typography>
         </Box>
         <Box sx={{pb:"2%",px:"1%"}}>
          <Box sx={codeboxstyle}>
            <Typography variant="p" component="div">
                6725562285654124445853216498461548454
            </Typography>
         </Box>
         </Box>
         
         
        

        </DialogContent>
        <DialogActions sx={{p:"2%"}}>
                <Button variant="contained" sx={subbtnstyle} fullWidth>
                    ثبت سفارش 
                </Button>
         </DialogActions>
      </BootstrapDialog>
  )
}
