export const isRequiredField = (data, actionCreator) => {
   // if (data.companyName === '') {
   //    actionCreator(false, 'companyName', 'This field in required')
   // }
   if (data.numberPeople === '') {
      actionCreator(false, 'numberPeople', 'This field in required')
   }
   if (data.businesArea === '') {
      actionCreator(false, 'businesArea', 'This field in required')
   }
   if (data.description === '') {
      actionCreator(false, 'description', 'This field in required')
   }
}