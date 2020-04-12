import React from 'react';
import a from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
  return (
    <div className={a.item}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={a.active}>

      <img className={a.avatar} src={"../image/" + props.id + ".png"} 
      alt="asd"></img>
     
        <p>{props.name}</p>
        
        </NavLink>
    </div>
  )
}

export default Dialog;