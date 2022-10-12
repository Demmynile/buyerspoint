import React from 'react'
import ProductCard from './ProductCard'
import { ProductData } from '../Data'

type titleProps = {
	title : string
}



const ProductList = (props : titleProps ) => {
  return (
	<div className='flex flex-col justify-center' >
		<div className='p-7 mt-5 ml-9 '>
           <h2 className='text-2xl font-bold'>{props.title}</h2>
		</div>

		<div className='bg-white-400 w-[90%] mb-5 h-[12rem] mx-auto flex items-center justify-center px-4 gap-x-[5rem]'>
			<div className='bg-white w-[3rem] h-[3rem] flex justify-center items-center p-1 hover: cursor-pointer' >
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
					</svg>

			</div>
		{ProductData && ProductData.map(item => {
		  return (
			<>
		
			<ProductCard new = {item}/> 
			</>
		  )
      	})}
		    <div className='bg-white w-[3rem] h-[3rem]  flex justify-center items-center p-1 hover: cursor-pointer'>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
				</svg>
            </div>
         
		</div>
	</div> 
  )
}

export default ProductList