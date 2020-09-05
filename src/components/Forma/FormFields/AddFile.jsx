import React from 'react';
import style from '../Forma.module.scss'
import folderSvg from '../../../assets/Folder.svg'

const AddFile = () => {

   return (
      <>
         <label htmlFor="inputFile" data-text="3 files attached">
            <img src={folderSvg} alt="" />
            <span>Add file as attachment</span>
         </label>
         <input
            type="file"
            id="inputFile"
            className={style.inputHide}
            multiple
         />
      </>
   );
}

export default AddFile;
