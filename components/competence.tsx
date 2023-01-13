export default function Skills () {

  return(
    <div className="bg-white w-full" id="Compétence">
      <h1 className="md:text-4xl text-mg font-mono ml-5 mb-10">Compétence</h1>
      <div className="flex">
        <div className="mt-10 w-full">
          <h2 className=" flex-col md:text-2xl text-mg font-mono ml-20">Dévelopement Web</h2>
          <div className="gap ml-20 mt-10 md:text-2xl text-mg">
            <div>
              <h3 className="mb-3">NextJS</h3>
              <img src="/nextjs.png" className="w-10 h-10 "></img>
            </div>
            <div>
              <h3 className="mb-3">ReactJS</h3>
              <img src="/reactjs-icon.svg" className="w-10 h-10 "></img>
            </div>
            <div> 
              <h3 className="mb-3">CSS/Tailwind</h3>
              <img src="/tailwindcss-icon.svg" className="w-10 h-10 "></img>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full">
          <h2 className="flex-col md:text-2xl text-mg font-mono ml-20">Langages de programmation</h2>
          <div className="gap ml-20 mt-10 md:text-2xl text-mg">
            <div>
              <h3 className="mb-3">Typescript</h3>
              <img src="/typescriptlang-icon.svg" className="w-10 h-10 "></img>
            </div>
            <div>
              <h3 className="mb-3">Python</h3>
              <img src="/python-icon.svg" className="w-10 h-10 "></img>
            </div>
            <div>
              <h3 className="mb-3">Java</h3>
              <img src="/java-icon.svg" className="w-10 h-10 "></img>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full">
          <h2 className="flex-col md:text-2xl text-mg font-mono ml-20">Autres</h2>
          <div className="gap ml-20 mt-10 md:text-2xl text-mg">
            <div>
              <h3>Bash</h3>
              <img src="/gnu_bash-icon.svg" className="w-10 h-10 "></img>
            </div>
            
          </div>
        </div>
      </div>
    </div>

  )
} 