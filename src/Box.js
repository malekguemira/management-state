import React from 'react'

function Box(p) {
    
    const handle =(e) => {
    console.log     (e.target.checked,
         e.target.name)
    }
  return (
    
  <div class="card" >
  <div class="card-body">
    <h5 class="card-title">To-Do List</h5>
    {p.data.map( (m) =>
      <div class="form-check form-switch">
        <input class="form-check-input" onChange={handle} name={m.name}  type="checkbox" role="switch" id="reverseCheck" />
            <label class="form-check-label"  for="flexSwitchCheckDefault">{m.nom}</label>
        </div>
    ) }
    
    <p class="card-text"></p>

  </div>
</div>
    
  )
}

export default Box;
