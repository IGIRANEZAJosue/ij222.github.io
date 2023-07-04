import React from 'react'
import DashboardHeader from '../components/DashboardHeader';
import AnalyticsCards from '../components/Cards';

const Loans = () => {
   return (
      <div className='p-4 w-[82vw]'>
      
         <DashboardHeader page="Loans" />

         <AnalyticsCards />


      </div>
   )
}

export default Loans;
