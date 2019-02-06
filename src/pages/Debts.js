import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { shape, array, func, bool } from 'prop-types'
import { Item, Header, Icon, Button, Segment } from 'semantic-ui-react'
import moment from 'moment'
import { sortBy } from 'lodash'

const toSummaries = (debts) => {
  const summaries = {}
  debts
    .filter(debt => !debt.paid)
    .forEach(debt => {
      summaries[debt.who] = summaries[debt.who] || { who: debt.who, amount: 0 }
      summaries[debt.who].amount += debt.amount
    })
  return Object.values(summaries).filter(s => s.amount !== 0)
}

function Debts({ whiteTheme, debts, dispatch, history }) {
  const summaryItem = (summary) => {
    return (
      <Item key={summary.who}>
        <Item.Content>
          {summary.amount > 0 ?
            <Item.Header>
              {summary.who} owes <span style={{ color: 'green' }}>{summary.amount}€</span> to you
            </Item.Header>
            :
            <Item.Header>
              You owe <span style={{ color: 'red' }}>{-summary.amount}€</span> to {summary.who}
            </Item.Header>
          }
          <Item.Extra></Item.Extra>
        </Item.Content>
        <Button
          color='green'
          content={'Pay all'}
          icon='euro'
          onClick={() => dispatch({ type: 'PayAll', value: summary.who })}
        />
      </Item>
    )
  }

  const debtItem = (debt) => {
    return (
      <Item key={debt.id}>
        {debt.amount > 0 ?
          <Item.Content>
            <Item.Header style={{ color: debt.paid ? 'gray' : 'black' }}>
              {debt.who} owes <span style={{ color: 'green' }}>{debt.amount}€</span> to you for {debt.reason}
            </Item.Header>
            <Item.Meta>{moment(debt.date).local().format('DD-MM-YYYY')}</Item.Meta>
            {debt.comment && <Item.Description style={{ color: debt.paid ? 'gray' : 'black' }}>{debt.comment}</Item.Description>}
            <Item.Extra></Item.Extra>
          </Item.Content>
          :
          <Item.Content>
            <Item.Header style={{ color: debt.paid ? 'gray' : 'black' }}>
              You owe <span style={{ color: 'red' }}>{-debt.amount}€</span> to {debt.who} for {debt.reason}
            </Item.Header>
            <Item.Meta>{moment(debt.date).local().format('DD-MM-YYYY')}</Item.Meta>
            {debt.comment && <Item.Description style={{ color: debt.paid ? 'gray' : 'black' }}>{debt.comment}</Item.Description>}
            <Item.Extra></Item.Extra>
          </Item.Content>
        }
        <Button.Group>
          <Button
            color='green'
            content={debt.paid ? 'Undo payment' : 'Pay'}
            icon='euro'
            basic={debt.paid}
            onClick={() => dispatch({ type: debt.paid ? 'UnPayDebt' : 'PayDebt', value: debt.id })}
          />
          <Button
            color='green'
            content={'Edit'}
            icon='edit'
            onClick={() => history.push(`${history.location.pathname}/${debt.id}`)}
          />
        </Button.Group>
      </Item>
    )
  }

  return (
    <Segment inverted={whiteTheme} basic style={{ height: '100vh' }}>
      <Segment>
        <Header size="large"><Icon name="file outline" />Summary</Header>
        <Item.Group divided link>
          {sortBy(toSummaries(debts), 'who').map(summaryItem)}
        </Item.Group>
      </Segment>
      <Segment>
        <Header size="large"><Icon name="history" />History</Header>
        <Item.Group divided>
          {sortBy(debts, ['date', 'id']).reverse().map(debtItem)}
        </Item.Group>
      </Segment>
    </Segment>
  )
}

const mapStateToProps = state => {
  return {
    debts: state.debts,
    whiteTheme: state.whiteTheme,
  }
}

Debts.propTypes = {
  debts: array.isRequired,
  dispatch: func.isRequired,
  whiteTheme: bool.isRequired,
  history: shape({ push: func.isRequired }).isRequired,
}

export default withRouter(connect(mapStateToProps)(Debts))
