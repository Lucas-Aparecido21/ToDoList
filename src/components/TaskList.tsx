import React from 'react';
import './TaskList.modules.css'
import {Trash} from 'phosphor-react';
export function TaskList(){
return(   
<div className='task'>
<button className='check'> 
   <div/>
</button>

<p>
Teste
</p>

<button className='deleteButton'>
<Trash size={20} />
</button>
  


</div>
);
}

