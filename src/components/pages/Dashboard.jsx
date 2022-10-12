import React from 'react'
import { Box } from '@mui/material'
import DashboardInfo from '../elements/dashboard/DashboardInfo';
import FormTabs from '../elements/dashboard/FormTabs';
import FormInfo from '../elements/dashboard/FormInfo';
import { ReactComponent as USD } from '../../ethereum-classic.svg';

export default function Dashboard() {

   const data=[
    {"name":"تعداد بایننس کوین","price":"۲۱۵۰BUSD"},
    {"name":"قیمت هر واحد","price":"۳۰,۲۵۰تومان"},
    {"name":"مبلغ","price":"۶۳,۵۷۰,۵۰۰تومان"},
    {"name":"تخفیف","price":"۰ تومان"},
    {"name":"کارمزد‌شبکه‌ارسال","price":"در‌انتظار‌محاسبه"},

   ]
   const options = [
    { "label": 'بایننس کوین', "icon": USD },
    { "label": 'تتر', "icon": USD },
    { "label": 'دای', "icon": USD },
    { "label": 'بی اس دی کوین', "icon": USD },

  ]
   const value=" ۶۷,۹۷۳,۰۰۰ تومان"
  return (
    <div>
      <Box sx={{ textAlign: 'right' }}>
        <DashboardInfo />
      </Box>
      <div className='row '>
        <div className='col-lg-6 col-12 content-dashboard'>
          <FormTabs options={options}/>
        </div>
        <div className='col-lg-6 col-12 content-dashboard  border-right-marginbold'>
          <FormInfo listdata={data} description={true} finalvalue={value} title="جزئیات سفارش" options={options}/>
        </div>
      </div>
    </div>
  )
}
