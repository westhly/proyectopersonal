import  React  from "react";

function Formulario () {

    return (
        
        <form>
            <h1>Buenas noches: Tienda 0707 Mayales</h1>
  <label>
    Presupuesto:
    <input type="number" name="num" />
  </label>
  <label>
    Venta sin IVA:
    <input type="number" name="name" />
  </label>
  <label>
    Cumplimiento:
    <input type="number" name="name" />
  </label>
  <label>
    LFL:
    <input type="number" name="name" />
  </label>
  <h2>QUIEBRAS</h2>
  <label>
    Liquidacion:
    <input type="number" name="name" />
  </label>
  <label>
    Liquidacion:
    <input type="number" name="name" />
    <input type="number" name="porcentaje" />
  </label>
  <label>
    Ajustes:
    <input type="number" name="name" />
    <input type="number" name="porcentaje" />
  </label>

  <input type="submit" value="Imprimir" />
</form>
    )
   
}

export default Formulario;

