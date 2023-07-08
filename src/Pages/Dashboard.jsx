
import Goals from '../components/Goals';
import DashboardHeader from '../components/DashboardHeader';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import AnalyticsCards from '../components/AnalyticsCards';
import LineChart from '../components/linechart';
import Provinces from '../components/Provinces';


const Dashboard = () => {
   
   return (
      <>
         <div className='font-Poppins text-gray-900 w-[82vw] p-4 overflow-hidden  bg-[#f0f2f5]'>
           
            <DashboardHeader page="Dashboard" />

            <AnalyticsCards />

            <div className=" flex items-center gap-6 py-6">
               <div className=" w-1/3">
                  <PieChart />
               </div>

               <div className=" w-2/3">
                  <BarChart />
               </div>
            </div>

            <div className="flex items-center gap-6">
            
               <div className=" w-2/3 ">
                  <LineChart />
               </div>
               <div className=" w-1/3 ">
                  <Provinces />
               </div>

            </div>

            <Goals />

         </div>

      </>
    
   )
}

export default Dashboard;
