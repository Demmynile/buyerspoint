import React from 'react'

type ButtonPropsType = {
	children : string
}

const Button = ({children} : ButtonPropsType) => {
  return (
	<div className='w-[4rem] h-[1.5rem] bg-gray-100 flex justify-center'>
		<button className='font-mono font-bold text-black text-[.6rem]'>{children}</button>
	</div>
  )
}

export default Button