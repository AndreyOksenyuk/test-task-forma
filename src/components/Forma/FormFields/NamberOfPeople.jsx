import React from 'react';

const NamberOfPeople = ({ validator }) => {
   return (
      <>
         <label htmlFor="NumberOfPeople" className="requiredField">Number of people</label>
         <input
            type="number"
            min="1"
            max="99"
            placeholder="1-99"
            id="NumberOfPeople"
            className={validator.isValid ? null : 'noValidField'}
         />
         {!validator.isValid &&
            <span className="error__description">{validator.message}</span>
         }
         
      </>
   );
}

export default NamberOfPeople;
