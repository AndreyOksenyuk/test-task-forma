import React from 'react';

const BusinessArea = ({ validator, setDataSubmitAC, setValidFieldAC }) => {

   const handleChange = (e) => {
      let value = e.target.value
      setDataSubmitAC({ businesArea: value})

      if (value !== '') {
         setValidFieldAC(true, 'BusinesArea', '')
      }  
   }

   const onBlur = (e) => {
      let value = e.target.value
      if (value === '') {
         setValidFieldAC(false, 'BusinesArea', 'This field in required')
      } 
   }

   return (
      <>
         <label htmlFor="Business_area" className="requiredField">Business area</label>
         <input
            type="text"
            placeholder="Type text"
            id="Business_area"
            onChange={handleChange}
            onBlur={onBlur}
            className={validator.isValid ? null : 'noValidField'}
         />
         {!validator.isValid &&
            <span className="error__description">{validator.message}</span>
         }
      </>
   );
}

export default BusinessArea;
