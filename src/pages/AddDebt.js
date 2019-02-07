import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux'
import { array, func, bool } from 'prop-types'
import { Form, Segment } from 'semantic-ui-react'
import moment from 'moment'
import { SemanticToastContainer, toast } from 'react-semantic-toasts'
import 'react-semantic-toasts/styles/react-semantic-alert.css'
import '../common.css'

const toOptions = (label) => ({ key: label, text: label, value: label })

function AddDebt({ reasons, contacts, whiteTheme, dispatch }) {
  const [isDebt, setIsDebt] = useState(true)
  const [who, setWho] = useState('')
  const [amount, setAmount] = useState('')
  const [reason, setReason] = useState('')
  const [comment, setComment] = useState('')
  const [errorTimer, setErrorTimer] = useState(null)

  let [errorAmount, setErrorAmount] = useState(false)
  let [errorContact, setErrorContact] = useState(false)
  let [errorReason, setErrorReason] = useState(false)

  return (
    <div>
      <SemanticToastContainer />
      <Segment inverted={whiteTheme} basic style={{ height: '100vh' }}>
        <Form
          inverted={whiteTheme}
          onSubmit={() => {
            const amountNumber = Number(amount)
            if (!amountNumber)
              errorAmount = true
            if (!who)
              errorContact = true
            if (!reason)
              errorReason = true

            if (!errorAmount && !errorContact && !errorReason) {
              dispatch({
                type: 'AddDebt',
                value: {
                  who: who,
                  amount: isDebt ? -amountNumber : amountNumber,
                  reason: reason,
                  comment: comment,
                  date: moment().format(),
                  paid: false,
                },
              })
              if (errorTimer)
                clearTimeout(errorTimer)
              setErrorTimer(null)
              setErrorAmount(false)
              setErrorContact(false)
              setErrorReason(false)
              setWho('')
              setAmount('')
              setReason('')
              setComment('')
              toast({ type: 'success', icon: 'save', title: 'New debt created', time: 3000 });
            } else {
              if (errorTimer)
                clearTimeout(errorTimer)
              setErrorTimer(setTimeout(() => {
                setErrorAmount(false)
                setErrorContact(false)
                setErrorReason(false)
              }, 3000))
              setErrorAmount(errorAmount)
              setErrorContact(errorContact)
              setErrorReason(errorReason)
            }
          }}
        >
          {isDebt ?
            <Fragment>
              <Form.Input size="big" required error={errorAmount} type="number" step="0.01" label='You owe' placeholder='Amount...' value={amount} onChange={(_, e) => setAmount(e.value)} />
              <Form.Dropdown selection required error={errorContact} label='To' options={contacts.sort().map(toOptions)} placeholder='Contact...' value={who} onChange={(_, e) => setWho(e.value)} />
            </Fragment>
            :
            <Fragment>
              <Form.Dropdown selection required error={errorContact} label='Contact' options={contacts.sort().map(toOptions)} placeholder='Contact...' value={who} onChange={(_, e) => setWho(e.value)} />
              <Form.Input size="big" required error={errorAmount} type="number" step="0.01" label='Owes you' placeholder='Amount...' value={amount} onChange={(_, e) => setAmount(e.value)} />
            </Fragment>
          }
          <Form.Dropdown selection required error={errorReason} label='For' options={reasons.sort().map(toOptions)} placeholder='Reason...' value={reason} onChange={(_, e) => setReason(e.value)} />
          <Form.Input size="big" label='Comment (optional)' placeholder='Comment...' value={comment} onChange={(_, e) => setComment(e.value)} />
          <Form.Group widths="equal">
            <Form.Button size="big" color="blue" basic fluid onClick={(e) => {
              e.preventDefault()
              setIsDebt(!isDebt)
            }}>Toggle reciever</Form.Button>
            <Form.Button size="big" color="green" basic fluid>Add debt</Form.Button>
          </Form.Group>
        </Form>
      </Segment>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    reasons: state.reasons,
    contacts: state.contacts,
    whiteTheme: state.whiteTheme,
  }
}

AddDebt.propTypes = {
  reasons: array.isRequired,
  contacts: array.isRequired,
  whiteTheme: bool.isRequired,
  dispatch: func.isRequired,
}

export default connect(mapStateToProps)(AddDebt)
