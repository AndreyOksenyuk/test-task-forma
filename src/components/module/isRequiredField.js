export const isRequiredField = (data, actionCreator) => {
   // if (data.companyName === '' || data.description === null) {
   //    actionCreator(false, 'companyName', 'This field in required')
   // }
   if (data.numberPeople === '' || data.numberPeople === null) {
      actionCreator(false, 'numberPeople', 'This field in required')
   }
   if (data.businesArea === '' || data.businesArea === null) {
      actionCreator(false, 'businesArea', 'This field in required')
   }
   if (data.description === '' || data.description === null) {
      actionCreator(false, 'description', 'This field in required')
   }
}