import React from 'react'
import HeaderInfo from '../elements/bankaccount/HeaderInfo';
import WalletInfo from '../elements/wallet/WalletInfo'
import WalletList from '../elements/wallet/WalletList'


function createData(date, name, operation, count, address, txid, station) {
    return { date, name, operation, count, address, txid, station };
}
function createDatainfo(icon, name, number, percend) {
    return { icon, name, number, percend };
}

const rows = [
    createData('۲۳ بهمن ۱۴۰۱', 'تتر', 'واریز', '875', 'TKavR…RKkSjm', 'a81813115b...f8c5b286', 'تکمیل شده'),
    createData('۲۳ بهمن ۱۴۰۱', 'تتر', 'واریز', '875', 'TKavR…RKkSjm', 'a81813115b...f8c5b286', 'تکمیل شده'),
]
const infodata = [
    createDatainfo('Tether', 'تتر', '136', '%42'),
    createDatainfo('Binance', 'بایننس کوین', '136', '%42'),
    createDatainfo('Usd', 'یو اس دی کوین', '136', '%42'),
    createDatainfo('Dai', 'دای', '136', '%42'),
]

export default function Wallet() {
    const [userdata, setUserdata] = React.useState({
        name: "حسین اسدزاده",
        level: "سطح طلایی",
        withdraw: "۱۰۰ میلیون تومان",
        deposit: "نامحدود",
        values: "کمتر از ۳،۰۰۰ تتر",
        distance: "۱،۲۰۰ تتر",
    });
    return (
        <div>
            <HeaderInfo userdata={userdata} svgsDash={true}/>
            <WalletInfo infos={infodata} />
            <div className='row bg-light'>
                <br />
            </div>
            <WalletList rows={rows} />
        </div>
    )
}
