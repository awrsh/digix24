import React from 'react'
import WalletHead from '../elements/wallet/WalletHead'
import WalletInfo from '../elements/wallet/WalletInfo'
import WalletList from '../elements/wallet/WalletList'
import {ReactComponent as Tether} from '../../img/logos/tether.svg';
import {ReactComponent as Binance} from '../../img/logos/binance.svg';
import {ReactComponent as USD} from '../../img/logos/usd.svg';
import WalletWithdraw from '../elements/dialogs/WalletWithdraw';
import {ReactComponent as USDS} from '../../ethereum-classic.svg';

function createData(date, name, operation,count,address,txid,station) {
  return { date, name, operation,count,address,txid,station };
}
function createDatainfo(icon,name,number,percend) {
  return { icon,name,number,percend };
}

const rows=[
  createData('۲۳ بهمن ۱۴۰۱','تتر','واریز','875','TKavR…RKkSjm','a81813115b...f8c5b286','تکمیل شده'),
  createData('۲۳ بهمن ۱۴۰۱','تتر','واریز','875','TKavR…RKkSjm','a81813115b...f8c5b286','تکمیل شده'),
]
const infodata=[
  createDatainfo(Tether,'تتر','136','%42'),
  createDatainfo(Binance,'بایننس کوین','136','%42'),
  createDatainfo(USD,'یو اس دی کوین','136','%42'),
  createDatainfo(USD,'دای','136','%42'),

]
const options = [
  { "label": 'بایننس کوین', "icon": USDS },
  { "label": 'تتر', "icon": USDS },
  { "label": 'دای', "icon": USDS },
  { "label": 'بی اس دی کوین', "icon": USDS },

]
export default function Wallet() {
  const [withopen, setwithopen] = React.useState(false);

  const withopendialog=(event)=>{
      setwithopen(true);
  }
  const withclosedialog=(event)=>{
    setwithopen(false);
}
  return (
    <div>
        <WalletHead/>
        <WalletInfo infos={infodata} opendialogw={withopendialog}/>
        <div className='row bg-light'>
          <br/>
        </div>
        <WalletList rows={rows}/>
        <WalletWithdraw open={withopen} close={withclosedialog} options={options}/>
    </div>
  )
}
