import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Forma from './Forma';
import { setValidFieldAC, setDataSubmitAC } from '../../redux/app-reducer'

const FormaContainer = (props) => {
   return <Forma {...props} />
}

const mapStateToProps = (state) => ({
   dataSubmit: state.app.dataSubmit,
   CompanyName: state.app.CompanyName,
   NumberPeople: state.app.NumberPeople,
   BusinesArea: state.app.BusinesArea,
   Description: state.app.Description,
})

export default compose(
   connect(mapStateToProps, {
      setValidFieldAC, setDataSubmitAC
   })
)(FormaContainer)
