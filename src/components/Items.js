import React from 'react';
import { FaTrashAlt,FaEdit } from 'react-icons/fa';
import './items.css';
import {useGlobalContext} from '../context';
const Item = ({name,id}) => {
  const {deleteFunc,isEditFunc} = useGlobalContext();
  return (
    <div className="item-container">
        <h2>{name}</h2>
        <div className="icon">
            <FaEdit className='edit' onClick={()=>isEditFunc(id)} />
            <FaTrashAlt className='trash' onClick={()=>deleteFunc(id)} />
        </div>
    </div>
  );
};

export default Item;
