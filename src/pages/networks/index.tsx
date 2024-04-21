import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { FormEvent, useEffect, useState } from "react"
import { db } from '../../services/firebaseConection'

import {
  doc,
  setDoc,
  getDoc
  
} from 'firebase/firestore'

export function Networks() {
  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [youtube, setYoutube] = useState("")

  useEffect(()=>{
    function loadLinks(){
      const docRef = doc(db,"social","link")
      getDoc(docRef)
      .then((snapshot)=>{
        if(snapshot.data() !== undefined){
          setFacebook(snapshot.data()?.facebook)
          setInstagram(snapshot.data()?.instagram)
          setYoutube(snapshot.data()?.youtube)
        }
      })
    }
    loadLinks();
  },[])

  function handleRegister(e: FormEvent){
    e.preventDefault();

    setDoc(doc(db,"social","link"),{
      facebook:facebook,
      instagram:instagram,
      youtube:youtube
    }).then(()=>{
      console.log("Cadastrado com sucesso !!")
    }).catch(()=>{
      console.log("Erro ao cadastrar x")
    })

  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">

      <Header />
      <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

      <form onSubmit={handleRegister} className="flex flex-col max-w-xl w-full">
        <label className="text-white font-medium mt-2 mb-2">
          Link do Facebook
        </label>
        <Input
          type="url"
          placeholder="Digite a url do Facebook..."
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do Instagram
        </label>
        <Input
          type="url"
          placeholder="Digite a url do Facebook..."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do Youtube
        </label>
        <Input
          type="url"
          placeholder="Digite a url do Facebook..."
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />
        
        <button type="submit" className="mb-7 mt-5 bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center">
          Salvar Links
        </button>

      </form>
    </div>
  )
}