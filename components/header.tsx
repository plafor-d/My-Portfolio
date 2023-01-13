import React from "react"
export default function Header(){

  return (
    <header>
      <nav className='flex justify-between items-center bg-gray-800 text-white p-3 '>
        <img src="/icon.png" alt="" className='w-16'/>
        <h1 className="font-sans md:text-2xl text-xs ">Portfolio</h1>
        <div className='flex justify-end mt-2'>
          <a href="#A propos">
            <button  className=' mx-10 cursor-pointer hover:scale-110 transition-all whitespace-nowrap md:text-2xl text-xs '>A propos</button>
          </a>
          <a href="#Compétence">
            <button className=' mx-10 cursor-pointer hover:scale-110 transition-all whitespace-nowrap md:text-2xl text-xs'>Compétence</button>
          </a>
          <a href="#Projets"  >
            <button className=' mx-10 cursor-pointer hover:scale-110 transition-all whitespace-nowrap md:text-2xl text-xs'>Projets</button>
          </a>  
        </div>
      </nav>  
    </header>
  )
}
