import Presente from "../components/Presente"
import Porta from "../components/Porta"


export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <Porta selecionada={true}/>
      <Porta selecionada={false}/>
      <Porta selecionada/>
    </div>


  )
}












/*
<div style={{
  width: "200px",
  height: "200px",
  backgroundColor: "red",
  border: "20px solid white"

}}></div>

<div style={{
  width: "200px",
  height: "200px",
  backgroundColor: "purple",

}}></div> 
*/