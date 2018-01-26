import React from 'react';

const ItemDetail= (props) => {
  console.log(props);

  return (
    <div>
      <li>{props.item[0].name}</li>
      <li>{props.item[0].price}</li>
      <li>{props.item[0].happiness}</li>
      <img src={props.item[0].image_url}/>
    </div>

  );
};

export default ItemDetail;
