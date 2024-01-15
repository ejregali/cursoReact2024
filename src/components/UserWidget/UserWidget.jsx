
import React from 'react'
import './userWidgetStyled.css';
import User from '../../assets/img/user.svg';



function UserWidget({HandleClick }) {

  return (
    <div className='containerUser'>
      <img src={User} alt='Bag' className="userIcon"/> 
    </div>
  );
}
                                                                                                                                                                                                                                                                                   
export default UserWidget
