import React from "react"
import { Route } from "react-router-dom"
import SuccessPayment from '../components/pages/SuccessPayment'

const Routes = () => {
    return <div>
	
    <Route path="/success" component={SuccessPayment} />



    </div>
  }
  
  export default Routes