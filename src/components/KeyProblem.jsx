import React from 'react'
import kp1 from "../assets/kp1.svg"
import kp2 from "../assets/kp2.svg"
import kp3 from "../assets/kp3.svg"
import kp4 from "../assets/kp4.svg"

const KeyProblem = () => {
    return (
        <div className='m-12'>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-5xl font-bold font-serif'>Four key questions answered by CleverBooks</p>
                <div className='flex flex-wrap justify-center gap-8 py-24'>
                    <div className='bg-purple-100 p-6 pb-12 rounded-xl w-80'>
                        <img src={kp1} alt="" className='h-16' />
                        <p className='pt-4 font-semibold text-3xl'>Order Fulfillment Rate</p>
                        <p className='text-lg font-[500] pt-2'>The percentage of customer orders fulfilled on time.</p>
                    </div>
                    <div className='bg-purple-100 p-6 pb-12 rounded-xl w-80'>
                        <img src={kp2} alt="" className='h-16' />
                        <p className='pt-4 font-semibold text-3xl'>Inventory Turnover</p>
                        <p className='text-lg font-[500] pt-2'>The number of times inventory is sold or used in a given period.</p>
                    </div>
                    <div className='bg-purple-100 p-6 pb-12 rounded-xl w-80'>
                        <img src={kp3} alt="" className='h-16' />
                        <p className='pt-4 font-semibold text-3xl'>Days Sales of Inventory</p>
                        <p className='text-lg font-[500] pt-2'>The number of days it takes to sell the entire inventory on hand.</p>
                    </div>
                    <div className='bg-purple-100 p-6 pb-12 rounded-xl w-80'>
                        <img src={kp4} alt="" className='h-16' />
                        <p className='pt-4 font-semibold text-3xl'>Perfect Order Rate</p>
                        <p className='text-lg font-[500] pt-2'>The percentage of orders that are delivered on time, complete, undamaged, and with the correct documentation.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyProblem