export const Dropdow = ({ locations, parentCallback , DropdownOpen }) => {
  return (
    <div className="dropdown">
      <ul>
        { locations && locations.map(location => {
          return(
            <li key={location.lat} onClick={e => [parentCallback(location), DropdownOpen(false)]}>{location.name} - {location.state ? location.state : location.country}</li>
          )
          })
        }
      </ul>
    </div>
  )
}