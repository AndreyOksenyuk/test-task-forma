const SET_IS_COMPANY_NAME = 'app-reducer/SET_IS_COMPANY_NAME'
const SET_DATA_SUBMIT = 'app-reducer/SET_DATA_SUBMIT'

const initialState = {
   dataSubmit: {
      companyName: '',
      numberPeople: '',
      businesArea: '',
      description: '',
      file: '',
   },

   CompanyName: {
      isValid: true,
      message: ''
   },
   NumberPeople: {
      isValid: true,
      message: ''
   },
   BusinesArea: {
      isValid: true,
      message: ''
   },
   Description: {
      isValid: true,
      message: ''
   },

}

const App_Reducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_IS_COMPANY_NAME:
         switch (action.key) { 
            case 'companyName':
               return {
                  ...state,
                  CompanyName: {
                     isValid: action.boolean,
                     message: action.message
                  } 
               }
            case 'numberPeople':
               return {
                  ...state,
                  NumberPeople: {
                     isValid: action.boolean,
                     message: action.message
                  } 
               }
            case 'businesArea':
               return {
                  ...state,
                  BusinesArea: {
                     isValid: action.boolean,
                     message: action.message
                  } 
               }
            case 'description':
               return {
                  ...state,
                  Description: {
                     isValid: action.boolean,
                     message: action.message
                  } 
               }
            default:
               return state;
         }
      case SET_DATA_SUBMIT:
         return{
            ...state,
            dataSubmit: {
               ...state.dataSubmit,
               ...action.value
            }
         }
      default:
         return state
   }
}

export const setValidFieldAC = (boolean, key,  message) => ({
   type: SET_IS_COMPANY_NAME,
   boolean, key, message
})

export const setDataSubmitAC = (value) => ({
   type: SET_DATA_SUBMIT,
   value
})

export default App_Reducer;