import React from 'react';
import './Field.scss'

const Field = ({ type = 'text', textLabel = 'Label', textPlaceholder = 'Type text',
   required = false, min = 0, max = 0, resize = false, FieldName,
   validator, setDataSubmitAC, setValidFieldAC }) => {

   const handleChange = (e) => {
      let value = e.target.value

      function InputValue(FieldName) {
         switch (FieldName) {
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

      let objValue = new InputValue(FieldName)

      setDataSubmitAC(objValue)

      //Валидация 
      //установка валидного поля
      if (value !== '') {
         setValidFieldAC(true, FieldName, '')
      }

      //валидация поля "Number of people"
      if (FieldName === 'numberPeople' && (value < 1 || value > 99)) {
         setValidFieldAC(false, FieldName, 'Please enter number from 1 to 99')
      }
      if (/^0/i.test(value)) {
         setValidFieldAC(false, FieldName, 'A number cannot start from zero')
      }

      //Проверка на максимальное количество символов в поле Description.
      // const maxValue = 100
      // if (FieldName === 'description' && value.length > maxValue){
      //    setValidFieldAC(false, FieldName, `Must be ${maxValue} characters or less`)
      // }

   }

   //Валидация при потере фокуса
   const onBlur = (e) => {
      let value = e.target.value

      if (value === '' && required) {
         setValidFieldAC(false, FieldName, 'This field in required')
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
               style={resize ? null : { resize: 'none' }}
            />
         }

         {!validator.isValid &&
            <span className="error__description">{validator.message}</span>
         }
      </>
   );
}

export default Field;
