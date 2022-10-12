import { ProductData } from '../Data'
import ProductSliderCard from './ProductSliderCard'





export const ProductSlider = ( ) => {
  return (

	

		<div className=' w-[90%] mb-5 h-[12rem] mx-auto flex items-center justify-center px-4 gap-x-[1rem]'>
			<div className='bg-white w-[3rem] h-[3rem] flex justify-center items-center p-1 hover: cursor-pointer' >
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
					</svg>

			</div>
		{ProductData && ProductData.map(item => {
		  return (
			<>
		
			<ProductSliderCard new = {item}/> 
			</>
		  )
      	})}
		    <div className='bg-white w-[3rem] h-[3rem]  flex justify-center items-center p-1 hover: cursor-pointer'>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
				</svg>
            </div>
         
		</div>

  )

}