export const Error = ({ errorGeo, errorState }) => {
  return (
    <div className="error-container"> 
      <img height={150} width= {150} src='./assets/icons/error-computer.png'/>
      <h4>{ errorGeo ? errorGeo : '' }</h4>
      <h4>{ errorState.hasError ? errorState.message : '' }</h4>
		</div> 
  )
}