import React from 'react';
import style from './Title.module.scss';

const Title = ({text}) => {
   return (
      <>
         <h1 className={style.title_top}>{text}</h1>
      </>
   );
}

export default Title;
