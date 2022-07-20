import { useState, useRef, useEffect } from "react";
import { Dropdow } from "../Dropdown";
import { GeoLocationAPI } from "../../services/service.geolocation";
import { LIMIT_SHOW_DROPDOWN } from "../../services/config"

export const Search = ({ parentCallback }) => {
  const inputSearch = useRef(null);
  const container = useRef();
	const [textSearch, setTextSearch] = useState('');
	const [locations, setLocations] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onChangeTextSearch = (event) => {
		event.preventDefault();
		const text = inputSearch.current.value;
		setTextSearch(text)
	}

	const onSearchSubmit = (event) => {
		if (event.key !== "Enter" && event.type !=='click' ) return;
		inputSearch.current.value = '';
		GeoLocationAPI(textSearch, LIMIT_SHOW_DROPDOWN).then(setLocations , setIsDropdownOpen(true))
	}

  useEffect(() => {
    const clickedOutside = e => {
      if (isDropdownOpen && container.current && !container.current.contains(e.target)) {
        setIsDropdownOpen(false);
        setLocations([]);
      }
    }
    document.addEventListener("mousedown", clickedOutside)

  }, [isDropdownOpen])

  return (
    <div className="header" ref={container}>
      <div className="search">
        <input
          ref={inputSearch}
          onChange= {onChangeTextSearch}
          onKeyDown= {onSearchSubmit}
          type="text"
          className="search__input"
          placeholder="Busca una ciudad ... "
        />
        <button 
          type="button"
          onClick={(e) => onSearchSubmit(e)}
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
      { locations.length > 0 && isDropdownOpen && <Dropdow locations = {locations} parentCallback ={parentCallback}/> }
    </div>
    
  )
}