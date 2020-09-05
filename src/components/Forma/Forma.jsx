import React from 'react';
import style from './Forma.module.scss'
import YourCompanyName from './FormFields/YourCompanyName';
//import NamberOfPeople from './FormFields/NamberOfPeople';
//import Description from './FormFields/Description';
import AddFile from './FormFields/AddFile';
import { isRequiredField } from '../module/isRequiredField';
import Field from '../module/Field'

const Forma = (props) => {

   const hendleSubmit = async (e) => {
      e.preventDefault()
      console.log(props.dataSubmit);

      await isRequiredField(props.dataSubmit, props.setValidFieldAC)

   }

   return (
      <form className={style.forma} onSubmit={hendleSubmit}>

         <div className={style.inputTop__wrapper}>
            <div className={style.yourCompany__wrapper}>
               <YourCompanyName
                  validator={props.CompanyName}
               />
            </div>

            <div className={style.NumberOfPeople__wrapper}>
               {/* <NamberOfPeople
                  validator={props.NumberPeople}
               /> */}
               <Field
                  type='number'
                  min={1}
                  max={99}
                  textLabel='Number of people'
                  textPlaceholder='1-99'
                  required={true}
                  validator={props.NumberPeople}
                  FieldKey='numberPeople'
                  setDataSubmitAC={props.setDataSubmitAC}
                  setValidFieldAC={props.setValidFieldAC}

               />
            </div>

         </div>

         

         <div className={style.BusinessArea__wrapper}>
            <Field 
               type='text' 
               textLabel = 'Business area'
               textPlaceholder= 'Type text'
               required = {true}
               validator={props.BusinesArea}
               FieldKey='businesArea'
               setDataSubmitAC={props.setDataSubmitAC}
               setValidFieldAC={props.setValidFieldAC}
            />
         </div>


         <div className={style.textarea__wrapper}>
            {/* <Description
               validator={props.Description}
            /> */}
            <Field 
               validator={props.Description}
               type='textarea'
               textLabel='Description'
               textPlaceholder='Type text'
               required={true}
               FieldKey='description'
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
