import React from 'react'
import {Box} from '@mui/material';
import HeaderInfo from '../elements/bankaccount/HeaderInfo';
import BanksList from '../elements/bankaccount/BanksList';
import AddCardBank from '../elements/dialogs/AddCardBank';
import AddWalletAddress from '../elements/dialogs/AddWalletAddress';
import AgreementWallet from '../elements/dialogs/AgreementWallet';
function createData(bank, cardnumber, sheba) {
  return { bank,cardnumber,sheba};
}
const rows = [
  createData('بانک سامان',"5022-2910-5977-0485","IR37012002000000345896437"),
  createData('بانک سامان',"5022-2910-5977-0485","IR37012002000000345896437"),
  createData('بانک سامان',"5022-2910-5977-0485","IR37012002000000345896437"),

]
export default function BankAccount() {
  const [open,setopen]=React.useState(false);

  const opendialog=(event)=>{
    setopen(true)
  }
  const closedialog=(event)=>{
    setopen(false)
  }
  const [userdata, setUserdata] = React.useState({
    name:"حسین اسدزاده",
    level:"سطح طلایی",
    withdraw:"۱۰۰ میلیون تومان",
    deposit:"نامحدود",
    values:"کمتر از ۳،۰۰۰ تتر",
    distance:"۱،۲۰۰ تتر",
  });
  return (
    <div>
      <Box sx={{textAlign:'left'}}>
            <HeaderInfo userdata={userdata}/>
         <Box>
            <BanksList rows={rows} opendialog={opendialog}/>
         </Box>
         {/* <AgreementWallet open={open} close={closedialog} /> */}
         <AddCardBank open={open} close={closedialog}/> 
         {/* <AddWalletAddress open={open} close={closedialog} /> */}
      </Box>
    </div>
  )
}
