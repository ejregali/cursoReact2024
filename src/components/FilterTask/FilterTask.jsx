import React from 'react'

function FilterTask({handleChange, value}) {
  return (
    <div>
      <label htmlFor="filter">Filtrar por estado </label>
      <select name="select" id="filter" onChange={handleChange} value={value}>
        <option value="all">Todos</option>
        <option value="completed">Hogar</option>
        <option value="imcompleted">Relax</option>
        <option value="imcompleted">Elements</option>
      </select>
    </div>
  )
}

export default FilterTask
