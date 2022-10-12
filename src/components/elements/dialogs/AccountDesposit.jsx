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
import {  Box ,List,ListItem,ListItemIcon,ListItemText, TextField} from '@mui/material'
import { ContentCopy, Info, InfoOutlined, QrCode, WalletOutlined} from '@mui/icons-material';
import { CheckCircle,RadioButtonUnchecked } from '@mui/icons-material';
import DigiSelect from '../global/DigiSelect';
import CardID from '../global/CardID';

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


const subbtnstyle={
  fontSize:"16px", backgroundColor: "#424BFB", height: "55px"
}
export default function AccountDesposit({open,close}) {

  const [issmall, setissmall] = React.useState(false);
  const [inventory,setInventory]=React.useState();

  const listsdataID=[
    {'name':"حداقل واریز",'price':"1,000,000 تومان"},
    {'name':"حداکثر واریز",'price':"3,000,000,000 تومان"},
    {'name':"کارمزد واریز ریالی به ازای  هر 50  میلیون تومان",'price':"4,000 تومان"},

  ]
  
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
              برداشت وجه از حساب
        </BootstrapDialogTitle>
        
        <DialogContent>
        <Box className="border-right-marginboldblue" sx={{px:"1%",mt:"3%"}}>
           <Typography variant="p" component="div" fontSize="13px">
                انتخاب حساب بانکی
           </Typography>
         </Box>
             <Box sx={{pb:"1%"}}>
            <CardsBank/>
             </Box>
            <Box sx={{px:"1%"}}>
           <Typography variant="p" component="div" fontSize="13px">
                  مبلغ (تومان)
           </Typography>
         </Box>
         <Box sx={{pb:"2%",px:"1%"}}>
            <TextField 
              fullWidth
              placeholder='50,000,000'
              InputProps={{
                endAdornment: <InputAdornment position="end">تومان</InputAdornment>,
              }}
            />
            <Box className="d-flex justify-content-between">
               <Box  sx={inventory==='25'?boxselected:boxunselected} onClick={()=>setInventory("25")}>
                 25% موجودی
               </Box>
               <Box sx={inventory==='50'?boxselected:boxunselected} onClick={()=>setInventory("50")}>
                    50% موجودی
               </Box>
               <Box sx={inventory==='100'?boxselected:boxunselected} onClick={()=>setInventory("100")}>
                  کل موجودی 
               </Box>
            </Box>
           </Box>
          <Box>
            <Box className="bg-light" sx={{borderRadius:"14px",p:"2%",mt:"3%"}}>
                {listsdataID.map((item, idx) => (
                    <div className='d-flex justify-content-between info-list' key={idx}>
                    <Typography variant="p" component="div" sx={{fontSize : "14px"}}>
                        {item.name}
                    </Typography>
                    <hr />
                    <Typography variant="p" component="div"  sx={{fontSize : "14px"}}>
                        {item.price}
                    </Typography>
                    </div>
                ))}
            </Box>
          </Box>
         <Box className="d-flex justify-content-start">
            <InfoOutlined/>
            <Typography variant="p" component="div">
                سیکل های زمانی تسویه بانکی
            </Typography>
         </Box>
         
        

        </DialogContent>
        <DialogActions sx={{p:"2%"}}>
                <Button variant="contained" sx={subbtnstyle} fullWidth>
                    ثبت درخواست برداشت
                </Button>
         </DialogActions>
      </BootstrapDialog>
  )
}
