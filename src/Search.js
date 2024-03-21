import  './Search.scss'
import { CiSearch } from "react-icons/ci";

const Search = ()=> {
  return(
    <div className='searchWrap'>
    <input type='text' placeholder='flower'/>
    <button className='searchButton' >
    <span><CiSearch /></span>
       </button>
       </div>
  )
}

export default Search