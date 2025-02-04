export default function Counter({value, add, remove, reset, supp}) {
  return (
    <div>
      <h1>Compteur</h1>

      <div>{value}</div>

      <button onClick={() => {add()}}>+</button>
      <button onClick={() => {remove()}}>-</button>
      <button onClick={() => {reset()}}>Réinitialiser</button>
      <button onClick={() => {supp()}}>Supprimer</button>
    </div>
  )
}
