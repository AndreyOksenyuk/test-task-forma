import React from 'react';
import style from './Steps.module.scss';

const Steps = () => {
   return (
      <div className={style.steps}>
         <div className={style.step}>1</div>
         <div className={style.step}>2</div>
         <div className={`${style.step} ${style.stepActive}`}>3</div>
      </div>
   );
}

export default Steps;
