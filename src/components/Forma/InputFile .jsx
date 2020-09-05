import React, { useState } from 'react';
import style from './Forma.module.scss'
import folderSvg from '../../assets/Folder.svg'
import { useDispatch } from 'react-redux';
import { setFileInputValueAC } from '../../redux/app-reducer';

const InputFile  = () => {
   const [countFiles, setCountFiles] = useState(0)
   const dispatch = useDispatch()

   const hendleChange = (e) => {
      const value = e.target.files
      setCountFiles(value.length)
      dispatch(setFileInputValueAC(value))
   }

   return (
      <>
         <label htmlFor="inputFile" data-text={`${countFiles} files attached`}>
            <img src={folderSvg} alt="" />
            <span>Add file as attachment</span>
         </label>
         <input
            type="file"
            id="inputFile"
            className={style.inputHide}
            multiple
            onChange={hendleChange}
         />
      </>
   );
}

export default InputFile ;
