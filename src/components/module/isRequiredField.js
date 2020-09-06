export const isRequiredField = (data, setValidField) => {
   // if (data.companyName === '' || data.description === null) {
   //    setValidField(false, 'companyName', 'This field in required')
   // }
   if (data.numberPeople === '' || data.numberPeople === null) {
      setValidField(false, 'numberPeople', 'This field in required')
   }
   if (data.businesArea === '' || data.businesArea === null) {
      setValidField(false, 'businesArea', 'This field in required')
   }
   if (data.description === '' || data.description === null) {
      setValidField(false, 'description', 'This field in required')
   }
}