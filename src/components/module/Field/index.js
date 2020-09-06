import React from 'react';
import './Field.scss';
import { useDispatch } from 'react-redux';
import { setDataSubmitAC, setValidFieldAC } from '../../../redux/forma-reducer';

const Field = ({ type = 'text', textLabel = 'Label', textPlaceholder = 'Type text',
   required = false, resize = false, FieldName,
   validator }) => {
   const dispatch = useDispatch()

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

      dispatch(setDataSubmitAC(objValue))

      //Валидация при вводе
      //установка валидного поля
      if (value !== '') {
         dispatch(setValidFieldAC(true, FieldName, ''))
      }
   }

   //Валидация при потере фокуса
   const onBlur = (e) => {
      let value = e.target.value

      if (value === '' && required) {
         dispatch(setValidFieldAC(false, FieldName, 'This field in required'))
      }

      //валидация поля "Number of people"
      if (FieldName === 'numberPeople' && (value < 1 || value > 99)) {
         dispatch(setValidFieldAC(false, FieldName, 'Please enter number from 1 to 99'))
      }
      if (FieldName === 'numberPeople' && /^0/i.test(value)) {
         dispatch(setValidFieldAC(false, FieldName, 'A number cannot start from zero'))
      }

      //Проверка на максимальное количество символов в поле Description.
      // const maxValue = 100
      // if (FieldName === 'description' && value.length > maxValue){
      //   dispatch(setValidFieldAC(false, FieldName, `Must be ${maxValue} characters or less`)) 
      // }
   }

   return (
      <>
         <label
            htmlFor="Field_label"
            className={required ? "requiredField" : null}
         >{textLabel}</label>

         {
            (type === 'text' || type === 'number') &&
            <input
               type={type}
               placeholder={textPlaceholder}
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
