import React from 'react';
import style from './Forma.module.scss'
import AddFile from './InputFile ';
import { isRequiredField } from '../module/isRequiredField';
import Field from '../module/Field'

const Forma = (props) => {

   const hendleSubmit = (e) => {
      e.preventDefault()

      const data = props.dataSubmit;

      //Валидация пустых обязательных полей 
      //isRequiredField (data, actionCreator)
      isRequiredField(data, props.setValidFieldAC)

      //Submit
      const submitOk = !!data.numberPeople
         && !!data.businesArea
         && !!data.description
      if (submitOk) {
         console.log(props.dataSubmit);
      }
   }

   return (
      <form className={style.forma} onSubmit={hendleSubmit}>

         <div className={style.inputTop__wrapper}>
            <div className={style.yourCompany__wrapper}>
               <Field
                  type='text'
                  textLabel='Your company name'
                  textPlaceholder='Type text'
                  required={false}
                  validator={props.CompanyName}
                  FieldName='companyName'
                  setDataSubmitAC={props.setDataSubmitAC}
                  setValidFieldAC={props.setValidFieldAC}
               />
            </div>

            <div className={style.NumberOfPeople__wrapper}>
               <Field
                  type='number'
                  min={1}
                  max={99}
                  textLabel='Number of people'
                  textPlaceholder='1-99'
                  required={true}
                  validator={props.NumberPeople}
                  FieldName='numberPeople'
                  setDataSubmitAC={props.setDataSubmitAC}
                  setValidFieldAC={props.setValidFieldAC}
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
               setDataSubmitAC={props.setDataSubmitAC}
               setValidFieldAC={props.setValidFieldAC}
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
               setDataSubmitAC={props.setDataSubmitAC}
               setValidFieldAC={props.setValidFieldAC}
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
