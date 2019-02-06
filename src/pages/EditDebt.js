import React from 'react';
import { connect } from 'react-redux'
import { array, shape, string } from 'prop-types'
import EditDebtForm from '../components/EditDebtForm'

function EditDebt({ match, debts }) {
  const debtid = match.params.id
  const debt = debts.find(d => d.id == debtid) // eslint-disable-line eqeqeq

  if (!debt)
    return (<p>unknown debtid {debtid}</p>)

  return (
    <EditDebtForm debt={debt} />
  )
}

const mapStateToProps = state => {
  return {
    debts: state.debts,
  }
}

EditDebt.propTypes = {
  match: shape({ params: shape({ id: string.isRequired }).isRequired}).isRequired,
  debts: array.isRequired,
}

export default connect(mapStateToProps)(EditDebt)
