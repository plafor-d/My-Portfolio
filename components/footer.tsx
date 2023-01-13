import React from "react";
export default function Footer () {

  return(
    <footer className="bg-gray-800 text-white p-4  w-full bottom-0 abslolute">
      <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/4  text-xl">
            &copy; Pla Fortea Diego 2023 
          </div>  
          <div className="w-full md:w-1/4 text-xl">
            <a className="text-white">plafor_d@etna-alternance.net</a>
          </div>
          <div className="w-full md:w-1/4 text-sm">
            <a href="mailto:plafor-d@etna-alternance.net" className="text-white hover:text-gray-400 transition-all whitespace-nowrap text-xl "> Me contacter !</a> 
          </div>
      </div>
    </footer>
  )
}



