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
import {  Box ,Checkbox, FormControlLabel, FormGroup, FormLabel, TextField} from '@mui/material'
import Svg from '../../utils/Svgs';
import { ArrowDownward, Wallet } from '@mui/icons-material';
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
    border:"2px solid blue",width:"150px",borderRadius:"10px",px:"2%",py:"1%",mx:"1%",fontSize:"13px",
  }
  const boxunselected={
    border:"2px solid grey",width:"150px",borderRadius:"10px",px:"2%",py:"1%",mx:"1%",fontSize:"13px"
  }

export default function AddWalletAddress({open,close,options}) {

  const [issmall, setissmall] = React.useState(false);
  const [ptype,setPtype]=React.useState("");
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
        sx={{direction:"ltr"}}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close}>
            افزودن آدرس کیف پول
        </BootstrapDialogTitle>
        <DialogContent dividers sx={{width:"440px",px:"3%"}}>
          <FormGroup sx={{pb:"4%"}}>
            <FormLabel sx={{my:"1%",fontSize:"12px"}}>نام آدرس</FormLabel>
            <TextField 
             fullWidth
             placeholder='wallet1'
            />
           </FormGroup>
           <FormGroup sx={{pb:"4%"}}>
            <DigiSelect options={options} />           
           </FormGroup>
            <Box className="border-right-marginboldblue" sx={{px:"1%",my:"3%"}}>
               <Typography variant="p" component="div" fontSize="13px">
                  انتخاب شبکه پرداخت 
              </Typography>
            </Box>
            <Box className="d-flex justify-content-between" sx={{pb:"4%"}}>
                <Box sx={ptype==="erc"?boxselected:boxunselected}>
                    <FormGroup>
                    <FormControlLabel  control={<Checkbox checked={ptype==="erc"} />} onClick={()=>setPtype("erc")} 
                    label={<Typography variant="p" component="p"sx={{fontSize:"12px"}} >ERC-20</Typography>}
                    />
                    </FormGroup>
                </Box>
                <Box sx={ptype==="trc"?boxselected:boxunselected}>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox checked={ptype==="trc"}  />} onClick={()=>setPtype("trc")}
                     label={<Typography variant="p" component="p"sx={{fontSize:"12px"}} >TRC-20</Typography>}/>
                    </FormGroup>
                </Box>
                <Box sx={ptype==="bep"?boxselected:boxunselected}>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox checked={ptype==="bep"}  />} onClick={()=>setPtype("bep")} 
                    label={<Typography variant="p" component="p"sx={{fontSize:"12px"}} >BEP-20</Typography>} />
                    </FormGroup>
                </Box>
            </Box>
            <FormGroup sx={{pb:"6%"}}>
            <FormLabel sx={{my:"1%",fontSize:"12px"}}>آدرس ولت TRC-20 خود را وارد کنید</FormLabel>
            <TextField 
             fullWidth
             placeholder='TRC.....'
            />
          </FormGroup>
             <Button variant="contained" sx={{ fontSize: "16px", backgroundColor: "#424BFB", height: "55px" }} fullWidth>
                ثبت کارت بانکی جدید
             </Button>
        </DialogContent>
      </BootstrapDialog>
  )
}
