
import { TbLogin2 } from "react-icons/tb";
import { Link } from 'react-router-dom'

export function HeaderLogin(){
  

  return(
    <header className="w max-w-2xl mt-4 px-1">
      <nav className="w-full bg-white h-12 flex items-center justify-between rounded-md px-3">
         <div className="flex gap-4 font-medium">
           <Link to="/login">
            Login
           </Link>
           <Link to="/login">
            Cadastrar
           </Link>

           <button >
            <TbLogin2 size={28} color="#0269F0"/>
         </button>
         </div>
      </nav>
    </header>
  )
}