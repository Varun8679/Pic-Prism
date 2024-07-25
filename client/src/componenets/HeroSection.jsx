import { IoIosSearch } from "react-icons/io";

function HeroSection() {
  return (
    <div className='sm:w-[60vw] h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center'>
        <form className='absolute flex justify-center items-center'> 
            <input type="search" id='search' name='search' className='py-5 px-3 w-[80vw] text-xl sm:text-3xl mx-auto outline-none border-b-2' placeholder='search your asset...'/>
            <IoIosSearch className="text-3xl sm:text-5xl text-gray-400 -ml-10"/>
        </form>
    </div>
  )
}

export default HeroSection