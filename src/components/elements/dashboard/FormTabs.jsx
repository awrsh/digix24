import React from 'react'
import { TextField, Button, Box, ButtonGroup, FormGroup, InputAdornment, FormLabel, Typography } from '@mui/material'
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import {ListItemText, ListItem, ListItemIcon,List} from "@mui/material";
import PropTypes from 'prop-types';
import Svg from '../../utils/Svgs';
import BankLimit from '../dialogs/BankLimit';
import DigiSelect from '../global/DigiSelect';
import BuyStepTwo from '../dialogs/BuyStepTwo';
import ShopStep from '../dialogs/ShopStep';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        // <Box sx={{ p: 7 }}>
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function FormTabs({options}) {

  const [tabvalue, setTabvalue] = React.useState(0);

  const [open,setopen]=React.useState(false);
  const [opend,setopend]=React.useState(false);
  const [openshop, setopenshop] = React.useState(false)

  const handleChange = (event, newValue) => {
    setTabvalue(newValue);
  };
  const opendialog=(event)=>{
    setopen(true)
  }
  const closedialog=(event)=>{
    setopen(false)
  }
  const opendialogd=(event)=>{
    setopend(true)
  }
  const closedialogd=(event)=>{
    setopend(false)
  }
  const opendialogsh=(event)=>{
    setopenshop(true)
  }
  const closedialogsh=(event)=>{
    setopenshop(false)
  }
  
  
  const formbtnstyle={
    textAlign:'left',
    marginBottom:'45px',
  }
  const minibtnstyle={
    borderRadius:'30px',
    mx:"1.4%",
    minWidth:'38px',
    maxWidth:'38px',
    maxHeight:'25px',
    minHeight:'25px',
    fontSize:'10px',
    marginLeft:'3px',
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0, borderColor: 'divider', paddingBlock: .85 }}>
        <Tabs value={tabvalue} onChange={handleChange} fontSize="large" aria-label="basic tabs example"
          TabIndicatorProps={{
            style: { background: "rgba(255, 196, 0, 0.952)", height: 3 }
          }}
        >
          <Tab label={<span className={tabvalue === 0 ? "tab-color" : ""}>خرید‌ از‌ ما </span>} {...a11yProps(0)} />
          <Tab label={<span className={tabvalue === 1 ? "tab-color" : ""}>فروش به ما </span>} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tabvalue} index={0}>
        <form>
          <FormGroup className="pt-3" sx={formbtnstyle}>
              <DigiSelect options={options}/>
          </FormGroup>
          <FormGroup sx={formbtnstyle}>
            <FormLabel className="mb-2">مبلغ خرید(تومان)</FormLabel>
            <TextField  fullWidth variant='outlined' placeholder='۰.۰۰'
              InputProps={{
                endAdornment: <InputAdornment position="end">تومان</InputAdornment>,
              }}
              sx={{
                '& legend': { display: 'none' },
                '& fieldset': { top: 0 },
              }}
            />
              <Box className="d-flex justify-content-between" sx={{py:"1%",pb:"1%"}}>
              <p className='text-muted helper-fontsize'>موجودی کیف ۳۰۰,۰۰۰ تومان</p>
                  <Box className="d-flex" >
                      <Button variant="outlined" style={minibtnstyle}> %100</Button>
                      <Button variant="outlined" style={minibtnstyle}> %75</Button>
                      <Button  variant="outlined" style={minibtnstyle}> %50</Button>
                      <Button variant="outlined" style={minibtnstyle}> %25</Button>
                    </Box>
              </Box>
            
          </FormGroup>
          <FormGroup sx={formbtnstyle}>
            <FormLabel className="mb-2">تعداد بایننس کوین</FormLabel>
            <TextField fullWidth variant='outlined'  placeholder='۰.۰۰'
              InputProps={{
                endAdornment: <InputAdornment position="end">BUSD</InputAdornment>,
              }}
              // sx={{
              //   '& legend': { display: 'none' },
              //   '& fieldset': { top: 0 },
              // }}
            />
            <div className="d-flex justify-content-between pt-1">
              <p className='text-muted helper-fontsize'>موجودی ۰ بایننس</p>
              <Button variant="outlined" sx={{minHeight:"31px",maxHeight:"31px",borderRadius:"30px"}}>
              واریز‌ به‌کیف‌ پول
              </Button>
            </div>
          </FormGroup>
          <div>
            <Button variant="contained" onClick={opendialog} sx={{ fontSize: 21, backgroundColor: "#424BFB", height: "55px" }} fullWidth>
              خرید بایننس کوین
            </Button>
          </div>

        </form>

      </TabPanel>
      <TabPanel value={tabvalue} index={1}>
      <form>
          <FormGroup className="pt-3" sx={formbtnstyle}>
            <DigiSelect options={options}/>
          </FormGroup>
          <FormGroup sx={formbtnstyle}>
            <FormLabel className="mb-2">مبلغ فروش(تومان)</FormLabel>
            <TextField fullWidth variant='outlined' placeholder='۰.۰۰'
              InputProps={{
                endAdornment: <InputAdornment position="end">تومان</InputAdornment>,
              }}
             
            />
            <Box className="d-flex justify-content-between" sx={{px:"2%",py:"1%",pb:"1%"}}>
              <p className='text-muted helper-fontsize'>موجودی کیف ۳۰۰,۰۰۰ تومان</p>
                  <Box className="d-flex" >
                      <Button variant="outlined" style={minibtnstyle}> %100</Button>
                      <Button variant="outlined" style={minibtnstyle}> %75</Button>
                      <Button  variant="outlined" style={minibtnstyle}> %50</Button>
                      <Button variant="outlined" style={minibtnstyle}> %25</Button>
                    </Box>
              </Box>
          </FormGroup>
          <FormGroup sx={formbtnstyle}>
            <FormLabel className="mb-2">تعداد بایننس کوین</FormLabel>
            <TextField fullWidth variant='outlined' placeholder='۰.۰۰'
              InputProps={{
                endAdornment: <InputAdornment position="end">BUSD</InputAdornment>,
              }}
              sx={{
                '& legend': { display: 'none' },
                '& fieldset': { top: 0 },
              }}
            />
            <div className="d-flex justify-content-between pt-1 px-2">
              <p className='text-muted helper-fontsize'>موجودی ۰ بایننس</p>
              <Button variant="outlined" sx={{minHeight:"31px",maxHeight:"31px",borderRadius:"30px"}}>
              واریز‌ به‌کیف‌پول
              </Button>
            </div>
          </FormGroup>
          <div>
            <Button onClick={opendialogsh} variant="contained" sx={{ fontSize: 21, backgroundColor: "#424BFB", height: "55px" }} fullWidth>
              فروش بایننس کوین
            </Button>
          </div>

        </form>

      </TabPanel>
      <BuyStepTwo open={open} close={closedialog} opendialogd={opendialogd}/>
      <BankLimit open={opend} close={closedialogd}/>
      <ShopStep open={openshop} close={closedialogsh}/>
    </Box>
  )
}