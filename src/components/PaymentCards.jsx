import React from 'react'

const PaymentCards = () => {
  return (
   <div className=' w-full'>

   {/*CARDS*/}
   <div className="flex gap-3" >
      <div className="flex-1 p-4 bg-white gap-4 rounded-2xl drop-shadow-xl hover:drop-shadow-sm duration-300 ">
         <h1 className="flex items-center gap-4 font-semibold text-xl mb-2"> <i class="fa-light fa-money-bill-wave text-lg"></i> Total Contributions</h1>
         <div className="flex justify-between items-center font-semibold text-2xl">
            <p>$8000</p>
            <div className="radial-progress text-primary text-[18px]" style={{"--value":89}}>89%</div>
         </div>
         <small>Last 30 days</small>
      </div>

      <div className="flex-1 p-4 bg-white rounded-2xl drop-shadow-xl hover:drop-shadow-sm duration-300 ">
         <h1 className="flex items-center gap-4 font-semibold text-xl mb-2"> <i class="fa-light fa-money-bill-wave text-lg"></i> Total Loans</h1>
         <div className="flex justify-between items-center font-semibold text-2xl">
            <p>$8000</p>
            <div className="radial-progress text-[#00bfa6]" style={{"--value":70}}>70%</div>
         </div>
         <small>Last 30 days</small>
      </div>

      <div className="flex-1 p-4 bg-white rounded-2xl drop-shadow-xl hover:drop-shadow-sm duration-300  ">
         <h1 className="flex items-center gap-4 font-semibold text-xl mb-2"> <i class="fa-light fa-money-bill-wave text-lg"></i> Total Shares</h1>
         <div className="flex justify-between items-center font-semibold text-2xl">
            <p>$8000</p>
            <div className="radial-progress text-danger" style={{"--value":65}}>65%</div>
         </div>
         <small>Last 30 days</small>
      </div>

      <div className="flex-1 p-4 bg-white rounded-2xl drop-shadow-xl hover:drop-shadow-sm duration-300  ">
         <h1 className="flex items-center gap-4 font-semibold text-xl mb-2"> <i class="fa-light fa-money-bill-wave text-lg"></i> Total Money</h1>
         <div className="flex justify-between items-center font-semibold text-2xl">
            <p>$8000</p>
            <div className="radial-progress text-[#6C63FF]" style={{"--value":54}}>54%</div>
         </div>
         <small>Last 30 days</small>
      </div>

      
   </div>

</div>
  )
}

export default PaymentCards