import React from 'react';

const YourCompanyName = ({ validator }) => {
   const handleChange = (e) => {

   }

   return (
      <>
         <label htmlFor="yourCompany">Your company name</label>
         <input
            type="text"
            placeholder="Type text"
            id="yourCompany"
            onChange={handleChange}
            className={validator.isValid ? null : 'noValidField' }
         />
         {!validator.isValid &&
            <span className="error__description">{validator.message}</span>
         }

      </>
   );
}

export default YourCompanyName;
