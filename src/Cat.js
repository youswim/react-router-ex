import React from "react";
import { useParams } from "react-router-dom";

const Cat = (props) => {

    let {cat_name} = useParams()
    
  return (
    <div>
      <div>고양이 화면이에요.</div>
      <div>고양이 이름은 {cat_name} 입니다.</div>
    </div>
  );
};

export default Cat;
