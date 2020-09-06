import React, { useState } from 'react';
import style from './Forma.module.scss';
import AddFile from './InputFile ';
import { isRequiredField } from '../module/isRequiredField';
import Field from '../module/Field';
import Alert from '../Alert';

const Forma = (props) => {
   const [showSuccess, setShowSuccess] = useState(false)

   const hendleSubmit = (e) => {
      e.preventDefault()

      //Функция показывает алерт 
      //showAlert(callback, number)
      const showAlert = (setShow, ms) => {
         setShow(true)
         setTimeout(() => {
           setShow(false)
         }, ms);
      }

      const data = props.dataSubmit;

      //Валидация пустых обязательных полей 
      //isRequiredField (dataSubmit{}, actionCreator)
      isRequiredField(data, props.setValidFieldAC)

      //Submit
      const n = data.numberPeople
      const submitOk = (!!n && n <= 99 && n > 0)
         && !!data.businesArea
         && !!data.description

      if (submitOk) {
         console.log(data);
         showAlert(setShowSuccess, 4000)
       } 
   }

   return (
      <form className={style.forma} onSubmit={hendleSubmit}>

         {showSuccess &&
            <Alert
               type="success"
               text="Data added successfully"
            />
         }

         <div className={style.inputTop__wrapper}>
            <div className={style.yourCompany__wrapper}>
               <Field
                  type='text'
                  textLabel='Your company name'
                  textPlaceholder='Type text'
                  required={false}
                  validator={props.CompanyName}
                  FieldName='companyName'
               />
            </div>

            <div className={style.NumberOfPeople__wrapper}>
               <Field
                  type='number'
                  textLabel='Number of people'
                  textPlaceholder='1-99'
                  required={true}
                  validator={props.NumberPeople}
                  FieldName='numberPeople'
               />
            </div>
         </div>

         <div className={style.BusinessArea__wrapper}>
            <Field
               type='text'
               textLabel='Business area'
               textPlaceholder='Type text'
               required={true}
               validator={props.BusinesArea}
               FieldName='businesArea'
            />
         </div>

         <div className={style.textarea__wrapper}>
            <Field
               validator={props.Description}
               type='textarea'
               textLabel='Description'
               textPlaceholder='Type text'
               resize={false}
               required={true}
               FieldName='description'
            />
         </div>

         <div className={style.addFile__wrapper}>
            <AddFile />
         </div>

         <button className={style.btn_submit}>Submit</button>
      </form>
   );
}

export default Forma;
