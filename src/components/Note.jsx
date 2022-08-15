import React from "react";
import { MdDelete } from "react-icons/md";
import {MdEdit } from "react-icons/md";
function Note({ title, content, onDelete,onEdit, id }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <MdDelete size={25} />
      </button>
      <button onClick={() => onEdit(id)}>
        <MdEdit size={25}  />
      </button>
    </div>
    
  );
  
  }

export default Note;