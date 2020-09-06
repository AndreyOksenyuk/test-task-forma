import React from 'react';
import style from './Alert.module.scss';
import warning from '../../assets/warning.svg';
import error from '../../assets/error.svg';
import success from '../../assets/success.svg';

const Alert = ({ type, text }) => {
   return (
      <>
         {type === 'warning' &&
            <div className={style.warning} >
               <img src={warning} alt="warning" className={style.icon} />
               {text}
            </div>
         }

         {type === "error" &&
            <div className={style.error} >
               <img src={error} alt="error" className={style.icon} />
               {text}
            </div>
         }

         {type === 'success' &&
            <div className={style.success} >
               <img src={success} alt="success" className={style.icon} />
               {text}
            </div>
         }

      </>
   );
}

export default Alert;
