const Search = ({ search, setSearch })=>{

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  return (
      <form>
        <label className='search-title'>Find countries</label>
        <input type="text" value={search} onChange={handleSearch} />
        <button type="submit">Search</button>
      </form>   
  )

}

export default Search;