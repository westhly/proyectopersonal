import  React  from "react";
import { useState } from 'react';
import './style.css';


function Formulario () {

  const [presupuesto, setPresupuesto] = useState('');
  const [ventaiva, setVentaiva] = useState('');
  const [cumplimiento, setCumplimineto] = useState('');
  const [lfl, setLfL] = useState('');
  const [liquidacion, setLiquidacion] = useState('');
  const [ajustes, setAjustes] = useState('');
  const [totalquiebra, setTotalquiebra] = useState('');
  const [bazar, setBazar] = useState('');
  const [fruver, setFruver] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault ();
    console.log('Presupuesto:', presupuesto, 'Venta sin IVA:', ventaiva, 'Cumplimiento:', cumplimiento, 'LFL:', lfl, 'Liquidacion', liquidacion, 'Ajustes:', ajustes, 'Total quiebra', totalquiebra);
  }


    return (
        
        <form onSubmit={handleSubmit} className="my-form">
            <h1>Buenas noches: Tienda 0707 Mayales</h1>
          <label>
          Presupuesto:
    <input type="number" value={presupuesto} onChange={(event) => setPresupuesto(event.target.value)} />
  </label>
  <label>
    Venta sin IVA:
    <input type="number" value={ventaiva} onChange={(event) => setVentaiva(event.target.value)} />
  </label>
  <label>
    Cumplimiento:
    <input type="number" value={cumplimiento} onChange={(event) => setCumplimineto(event.target.value)} />
  </label>
  <label>
    LFL:
    <input type="number" value={lfl} onChange={(event) => setLfL(event.target.value)} />
  </label>
  <h2>Quiebra</h2>
  <label>
    Liquidacion:
    <input type="number" value={liquidacion} onChange={(event) => setLiquidacion(event.target.value)} />
    <input type="number" name="porcentaje" />
  </label>
  <label>
    Ajustes:
    <input type="number" value={ajustes} onChange={(event) => setAjustes(event.target.value)} />
    <input type="number" name="porcentaje" />
    <label/>
    <label/>
    <h3>Total quiebra</h3>  
    <input type="number" value={totalquiebra} onChange={(event) => setTotalquiebra(event.target.value)} />
    <input type="number" name="porcentaje" />
  </label>
    <label>
    Bazar:
    <input type="number" value={bazar} onChange={(event) => setBazar(event.target.value)} />
    <input type="number" name="porcentaje" />
  </label>
    <label>
    Fruver:
    <input type="number" value={fruver} onChange={(event) => setFruver(event.target.value)} />
    <input type="number" name="porcentaje" />
  </label>
  
 

  <button type="submit" value="Imprimir">Imprimir</button>
</form>
    )
   
}

export default Formulario;

