"use client"
const Nav = ({handleClick}) => {
  return (
    <div className='h-[5vh] w-full bg-yellow-500 relative'>  
    <button role='button' className='p-4 lg:hidden block' onClick={handleClick()} >
        +--- &gt;
    </button>
    </div>
  )
}

export default Nav