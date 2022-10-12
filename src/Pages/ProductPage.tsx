import React from 'react'
import Button from '../Components/Button'
import Navbar from '../Components/Navbar'
import ProductList from '../Components/ProductList'
import person from '../assets/person1.png'
import { ProductSlider } from '../Components/ProductSlider'

const ProductPage = () => {
  return (
	<div>
      <Navbar />
	  <div className='bg-gray-300 mx-auto w-[70%] h-[35rem] mt-4'>
         <div className = "bg-gray-300 w-[90%] h-[2rem] mx-auto flex gap-x-[3rem]">
             <div className = "p-1">
                 <Button >BACK HOME</Button>
			 </div>
			 <div className = "self-center">
				<h3 className = "font-bold font-mono text-[.8rem]">Mens Fashion - Yellow Sweater</h3>
			 </div>
		 </div>
		 <div className = "w-[90%] h-[2rem] mx-auto mt-4 flex gap-x-[.1rem]">
           

			<div className='flex flex-col  w-[35%] h-[30rem] gap-x-[0.2rem]'>

				<div className = "bg-grey-300 w-[100%] h-[20rem] flex justify-center">
			     	 <img src={person} alt =""  />
				</div>
				<div className = "w-[100%] h-[7rem]">
				  <ProductSlider />
				</div>
			</div>
           <div className='flex justify-around w-[65%] gap-x-[1rem]'>
				<div className = "w-[35%] h-[28rem] flex flex-col items-center gap-y-[1rem]" >
					
						<div className='mt-8'>
				    	   <h2 className = "font-bold text-3xl text-black font-mono">Yellow Sweater</h2>
                        </div>
						<div>
						   <h3 className='font-bold text-xl text-black font-mono'>DESCRIPTION</h3>
						</div>
						<div className='w-[13rem]'>
						   <h3 className='font-bold text-[0.8rem] text-black font-mono self-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
						</div>
						<div className='w-[13rem] flex items-center gap-x-4'>
						   <span className='font-bold text-[0.8rem] text-black font-mono self-center'>XS</span>
						   <span className='font-bold text-[0.8rem] text-black font-mono self-center'>S</span>
						   <span className='font-bold text-[0.8rem] text-black font-mono self-center'>M</span>
						   <span className='font-bold text-[0.8rem] text-black font-mono self-center'>L</span>
						   <span className='font-bold text-[0.8rem] text-black font-mono self-center'>XL</span>
						   <span className='font-bold text-[0.8rem] text-black font-mono self-center'>XXL</span>
						</div>
						<div className='flex gap-x-[.4rem]'>
						    <div className='bg-colYellow rounded-full w-[1.3rem] h-[1.3rem]'></div>
							<div className='bg-colPink rounded-full w-[1.3rem] h-[1.3rem]'></div>
							<div className='bg-colDeepBlue rounded-full w-[1.3rem] h-[1.3rem]'></div>
							<div className='bg-colDeepBlack rounded-full w-[1.3rem] h-[1.3rem]'></div>
							
						</div>
						
				
					
				</div>
				<div className = "bg-white  w-[30%] h-[28rem]">
					the best
				</div>
		  </div>

		

		 </div>
	  </div>

	 


      <div className = "w-[70%] mx-auto bg-gray-200 h-[20rem] mt-[1rem]">
	     <ProductList title = "Similar Items"/>
      </div>

	</div>
  )
}

export default ProductPage