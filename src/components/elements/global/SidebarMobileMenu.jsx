import React from 'react'
import {Box,Typography,Dialog,DialogContent,SvgIcon,List,ListItem,ListItemText,ListItemIcon} from '@mui/material'
import Grid from '@mui/material/Grid';
import {ReactComponent as AuthIcon} from '../../../img/menu-icon/Auth.svg';
import {ReactComponent as AssistIcon} from '../../../img/menu-icon/Assist.svg';
import {ReactComponent as BankCardIcon} from '../../../img/menu-icon/BankCard.svg';
import {ReactComponent as DashboardIcon} from '../../../img/menu-icon/Dashboard.svg';
import {ReactComponent as HistoryIcon} from '../../../img/menu-icon/History.svg';
import {ReactComponent as ShoppingIcon} from '../../../img/menu-icon/Shopping.svg';
import {ReactComponent as TransactionsIcon} from '../../../img/menu-icon/Transactions.svg';
import {ReactComponent as WalletIcon} from '../../../img/menu-icon/Wallet.svg';
import { Link } from 'react-router-dom';
import Svg from '../../utils/Svgs'
export default function SidebarMobileMenu({heightSize}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

    const menuItems=[
        { name: 'داشبورد', address: '/main-dashboard', icon: DashboardIcon },
        { name: 'خریدوفروش', address: '/', icon: ShoppingIcon },
        { name: 'کیف‌پول', address: '/wallet', icon: WalletIcon },
        { name: 'تاریخچه‌سفارشات', address: '/orderhistory', icon: HistoryIcon },
        { name: 'تراکنش‌های‌مالی', address: '/transactions', icon: TransactionsIcon },
        { name: 'کارت‌های‌بانکی', address: '/bankaccount', icon: BankCardIcon },
        { name: 'همکاری‌در‌فروش', address: '/', icon: AssistIcon },
        { name: 'احراز‌هویت', address: '/verification', icon: AuthIcon },

  
      ]

  return (
    <Box>
     <List component="nav" sx={{my:"5%",px:"24px"}}  className="px-2" aria-label="main mailbox folders">
        {menuItems.map((item, idx) => (
          <ListItem
            className="my-1 rounded-3"
            button 
            component={Link}
            to={item.address}
            key={idx}
            selected={selectedIndex === idx}
            onClick={heightSize}
          >
            <ListItemIcon>
              <Svg Component={item.icon} />
            </ListItemIcon>
            <ListItemText primary={item.name} className={selectedIndex === idx ? "mini-btn-active" : "text-dark"} />
          </ListItem>
        ))}
       </List>

        {/* <Grid container rowSpacing={1} className="py-5 px-1" columnSpacing={{ xs: 1, md: 5 }}>
          {menuItems.map((item,idx)=>(
          <Grid item xs={4} key={idx}>
            <Link to={item.address}>
            <Card style={{textAlign:'right',fontSize:'11px',border:3}}>
              <CardContent className="text-center">
               <SvgIcon color="primary" component={item.icon}/>
                <Typography variant="p" component="div">
                     {item.name}
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
          ))}
          </Grid> */}
    </Box>
  )
}
