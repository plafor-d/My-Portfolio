import Link from "next/link";

export default function Project() {

  return(
    <div className="bg-white"id="Projets" >
      <h1 className="text-3xl font-mono bg-white pb-24 ml-10">Projets</h1>
      <div className="flex m-auto w-3/4 justify-evenly gap-5  ">
        <div>
          <h1 className="font-mono text-xl">RPG Zelda - The Hyrule Castle</h1>
          <Link href={"https://github.com/plafor-d/-RPG-Zelda---The-Hyrule-Castle"} target="_blank"><img src="/zelda3.png" alt="" className="w-80 h-80 hover:scale-110 pt-10"/></Link>
          <p className="mt-10 w-2/4">Création d'un jeux type rpg Zelda en Typescript dans la console</p>
        </div>
        <div>
          <h1 className="font-mono text-xl">Code Camp - Défis Etna</h1>
          <Link href={"https://github.com/plafor-d/Code-Camp---D-fis-Etna"} target="_blank"><img src="/planning.png" alt="" className="w-80 h-80 hover:scale-110 pt-10 "/></Link>
          <p className="mt-10 w-2/4">Création d'une page web contenant un calendrier avec fullcalendar en Typescript et React</p>
        </div>
        <div>
          <h1 className="font-mono text-xl">Craftcomputer - Développement WEB</h1>
          <Link href={"https://github.com/plafor-d/Craftcomputer---D-veloppement-WEB"} target="_blank"><img src="/MyWebsite.png" alt="" className="w-80 h-80 hover:scale-110 pt-10 "/></Link>
          <p className="mt-10 w-2/4">Développement d'un site d'e-commerce en Typescript et React backend + frontend</p>
        </div>
      </div>
    </div>
    
  )
}