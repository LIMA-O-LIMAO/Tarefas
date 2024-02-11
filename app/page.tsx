'use client'

import Image from "next/image";
import Estilos from './Box'
import { useState } from "react";
import test from "node:test";





export default function Home() {

  const [Tarefas,setTarefas]=useState([])
  const [testk,setTesk] = useState("")



function Adicionar(){
setTarefas([...Tarefas,testk])


setTesk('')



console.log(Tarefas)
}
return (
<main>
<Estilos>
 <h1>Tarefas</h1>

<div>

<p></p>
</div>



<label>Digite sua atividade</label>
<input type="text"
value={testk}
onChange={(e) => setTesk(e.target.value)}

/>
<button onClick={Adicionar}> Adicionar </button>

</Estilos>

</main>

  );
}
