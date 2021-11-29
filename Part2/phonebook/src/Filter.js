const Filter = ({selectedFilter, handleFilterSubmit, handleFilterString}) =>{
  return(
    <form onSubmit={handleFilterSubmit}>
      <div> 
        Filter by name: <input type="text" onChange={handleFilterString} value={selectedFilter} />
      </div>
      <div>
      <button type="submit">Filter</button>
      </div>
    </form>
  )
}

export default Filter;