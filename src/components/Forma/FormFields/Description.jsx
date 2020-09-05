import React from 'react';

const Description = ({ validator }) => {
   return (
      <>
         <label htmlFor="Type_text" className="requiredField">Description</label>
         <textarea
            placeholder="Type text"
            id="Type_text"
            className={validator.isValid ? null : 'noValidField'}
         />

         {!validator.isValid &&
            <span className="error__description">{validator.message}</span>
         }
      </>
   );
}

export default Description;
