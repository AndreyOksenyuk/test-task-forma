import React from 'react';
import './Field.scss'

const Field = ({ type = 'text', textLabel = 'Label', textPlaceholder = 'Type text',
   required = false, min = 0, max = 0, FieldKey,
   validator, setDataSubmitAC, setValidFieldAC }) => {

   const handleChange = (e) => {
      let value = e.target.value
      
      function InputValue(field) {
         switch (field) {
            case 'companyName':
               this.companyName = value
               break;
            case 'numberPeople':
               this.numberPeople = value
               break
            case 'businesArea':
               this.businesArea = value
               break
            case 'description':
               this.description = value
               break
            default:
               break;
         }
      }
      let objValue = new InputValue(FieldKey)

      setDataSubmitAC(objValue)

      if (value !== '') {
         setValidFieldAC(true, FieldKey, '')
      }

   }

   const onBlur = (e) => {
      let value = e.target.value
      console.log(value);
      if (value === '') {
         setValidFieldAC(false, FieldKey, 'This field in required')
      }
   }

   return (
      <>
         <label 
            htmlFor="Field_label"
            className={required ? "requiredField" : null}
         >{textLabel}</label>

         {
            type === 'text' &&
            <input
               type="text"
               placeholder={textPlaceholder}
               id="Field_label"
               onChange={handleChange}
               onBlur={onBlur}
               className={validator.isValid ? null : 'noValidField'}
            />
         }
         {
            type === 'number' &&
            <input
               type='number'
               placeholder={textPlaceholder}
               min={min}
               max={max}
               id="Field_label"
               onChange={handleChange}
               onBlur={onBlur}
               className={validator.isValid ? null : 'noValidField'}
            />
         }
         {
            type === 'textarea' &&
            <textarea
               placeholder={textPlaceholder}
               id='Field_label'
               className={validator.isValid ? null : 'noValidField'}
               onChange={handleChange}
               onBlur={onBlur}
            />
         }

         {!validator.isValid &&
            <span className="error__description">{validator.message}</span>
         }
      </>
   );
}

export default Field;
