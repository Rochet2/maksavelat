import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { shape, string, number, array, func, bool } from 'prop-types'
import { Form, Segment } from 'semantic-ui-react'
import { SemanticToastContainer, toast } from 'react-semantic-toasts'
import 'react-semantic-toasts/styles/react-semantic-alert.css'

const toOptions = (label) => ({ key: label, text: label, value: label })

function EditDebtForm({ reasons, contacts, whiteTheme, dispatch, debt, history }) {
  const [isDebt, setIsDebt] = useState(debt.amount < 0)
  const [who, setWho] = useState(debt.who)
  const [amount, setAmount] = useState(Math.abs(debt.amount))
  const [reason, setReason] = useState(debt.reason)
  const [comment, setComment] = useState(debt.comment)
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
                type: 'EditDebt',
                value: {
                  id: debt.id,
                  who: who,
                  amount: isDebt ? -amountNumber : amountNumber,
                  reason: reason,
                  comment: comment,
                },
              })
              if (errorTimer)
                clearTimeout(errorTimer)
              setErrorTimer(null)
              setErrorAmount(false)
              setErrorContact(false)
              setErrorReason(false)
              toast({ type: 'success', icon: 'save', title: 'Saved', time: 3000 });
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
              <Form.Dropdown scrolling selection required error={errorContact} label='To' options={contacts.sort().map(toOptions)} placeholder='Contact...' value={who} onChange={(_, e) => setWho(e.value)} />
            </Fragment>
            :
            <Fragment>
              <Form.Dropdown scrolling selection required error={errorContact} label='Contact' options={contacts.sort().map(toOptions)} placeholder='Contact...' value={who} onChange={(_, e) => setWho(e.value)} />
              <Form.Input size="big" required error={errorAmount} type="number" step="0.01" label='Owes you' placeholder='Amount...' value={amount} onChange={(_, e) => setAmount(e.value)} />
            </Fragment>
          }
          <Form.Dropdown scrolling selection required error={errorReason} label='For' options={reasons.sort().map(toOptions)} placeholder='Reason...' value={reason} onChange={(_, e) => setReason(e.value)} />
          <Form.Input size="big" label='Comment (optional)' placeholder='Comment...' value={comment} onChange={(_, e) => setComment(e.value)} />
          <Form.Group widths="equal">
            <Form.Button size="big" color="blue" basic fluid onClick={(e) => {
              e.preventDefault()
              setIsDebt(!isDebt)
            }}>Toggle reciever</Form.Button>
            <Form.Field>
            <Form.Button size="big" color="green" fluid>Save debt</Form.Button>
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Button size="big" color="orange" basic fluid onClick={(e) => {
              e.preventDefault()
              if (errorTimer)
                clearTimeout(errorTimer)
              setIsDebt(debt.amount < 0)
              setWho(debt.who)
              setAmount(Math.abs(debt.amount))
              setReason(debt.reason)
              setComment(debt.comment)
              setErrorTimer(null)
            
              setErrorAmount(false)
              setErrorContact(false)
              setErrorReason(false)
              toast({ type: 'success', icon: 'erase', title: 'Form reset', time: 3000 });
            }}>Reset form</Form.Button>
            <Form.Button size="big" color="red" basic fluid onClick={(e) => {
              e.preventDefault()
              dispatch({ type: 'DeleteDebt', value: debt.id})
              history.goBack()
            }}>Delete debt</Form.Button>
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

EditDebtForm.propTypes = {
  debt: shape({
    who: string.isRequired,
    amount: number.isRequired,
    reason: string.isRequired,
    comment: string.isRequired,
  }).isRequired,
  reasons: array.isRequired,
  contacts: array.isRequired,
  whiteTheme: bool.isRequired,
  dispatch: func.isRequired,
  history: shape({ goBack: func.isRequired }).isRequired,
}

export default withRouter(connect(mapStateToProps)(EditDebtForm))
