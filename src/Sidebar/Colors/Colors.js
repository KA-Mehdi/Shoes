import React from 'react';
import './Colors.css';
import Input from '../../components/Input';
function Colors({handleChange}) {
  return <div>
        <h2 className='sidebar-title color-title'>Colors</h2>
        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name="test3"/>
          <span className='checkmark all' ></span>all
        </label>

        <Input 
          handleChange={handleChange}
          value="black"
          title="black"
          name="test3"
          color="black"
        />

        <Input 
          handleChange={handleChange}
          value="blue"
          title="blue"
          name="test3"
          color="blue"
        />

        <Input 
          handleChange={handleChange}
          value="red"
          title="red"
          name="test3"
          color="red"
        />


        <Input 
          handleChange={handleChange}
          value="green"
          title="green"
          name="test3"
          color="green"
        />

        <label className='sidebar-label-container'>
          <input 
            type='radio'
            title='white'
            onChange={handleChange}
            value='white'
            name='test3' 
          />
          <span className='checkmark' style={{background:"white",border:"1px solid black"}}></span>
          white
        </label>
  </div>
}

export default Colors
