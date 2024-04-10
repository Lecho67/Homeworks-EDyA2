

const CategorieInput = ({handleChange}) => {
  return (
  <input type="text" placeholder="Categorie" onChange={(e) => handleChange(e.target.value)} /> 
  )
}

export default CategorieInput