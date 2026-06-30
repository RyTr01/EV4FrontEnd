import React from 'react';

function Item({ item, deleteItem, editItem }) {
  return (
    <li className="Item">
      {item.value}
      <button className="Upd" onClick={() => editItem(item)}>
        Editar
      </button>
      <button className="Del" onClick={() => deleteItem(item.id)}>
        Eliminar
      </button>
    </li>
  );
}

export default Item;