import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Forma from './Forma';
import { setValidFieldAC } from '../../redux/forma-reducer';

const FormaContainer = (props) => {
   return <Forma {...props} />
}

const mapStateToProps = (state) => ({
   dataSubmit: state.forma.dataSubmit,
   CompanyName: state.forma.CompanyName,
   NumberPeople: state.forma.NumberPeople,
   BusinesArea: state.forma.BusinesArea,
   Description: state.forma.Description,
})

export default compose(
   connect(mapStateToProps, {
      setValidFieldAC
   })
)(FormaContainer)
