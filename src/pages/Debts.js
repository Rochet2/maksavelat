import React, { Component } from 'react';
import { connect } from 'react-redux'
import { array, func, bool } from 'prop-types'
import { Item, Header, Icon, Button, Segment } from 'semantic-ui-react'
import moment from 'moment'

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

class Debts extends Component {
    constructor(props) {
        super(props)
    }

    summaryItem(summary) {
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
                </Item.Content>
                <Button
                    color='green'
                    content={'Pay all'}
                    icon='euro'
                    onClick={() => this.props.dispatch({ type: 'PayAll', value: summary.who })}
                />
            </Item>
        )
    }

    debtItem(debt) {
        return (
            <Item key={debt.id}>
                {debt.amount > 0 ?
                    <Item.Content>
                        <Item.Header style={{ color: debt.paid ? 'gray' : 'black' }}>
                            {debt.who} owes <span style={{ color: 'green' }}>{debt.amount}€</span> to you for {debt.reason}
                        </Item.Header>
                        <Item.Meta>{moment(debt.date).local().format('DD-MM-YYYY')}</Item.Meta>
                        {debt.comment && <Item.Description style={{ color: debt.paid ? 'gray' : 'black' }}>{debt.comment}</Item.Description>}
                    </Item.Content>
                    :
                    <Item.Content>
                        <Item.Header style={{ color: debt.paid ? 'gray' : 'black' }}>
                            You owe <span style={{ color: 'red' }}>{-debt.amount}€</span> to {debt.who} for {debt.reason}
                        </Item.Header>
                        <Item.Meta>{moment(debt.date).local().format('DD-MM-YYYY')}</Item.Meta>
                        {debt.comment && <Item.Description style={{ color: debt.paid ? 'gray' : 'black' }}>{debt.comment}</Item.Description>}
                    </Item.Content>
                }
                <Button
                    color='green'
                    content={debt.paid ? 'Undo payment' : 'Pay'}
                    icon='euro'
                    basic={debt.paid}
                    onClick={() => this.props.dispatch({ type: debt.paid ? 'UnPayDebt' : 'PayDebt', value: debt.id })}
                />
            </Item>
        )
    }

    render() {
        const { whiteTheme, debts } = this.props
        return (
            <Segment inverted={whiteTheme} basic style={{ height: '100vh' }}>
                <Segment>
                    <Header size="large"><Icon name="file outline" />Summary</Header>
                    <Item.Group divided link>
                        {toSummaries(debts).sort((a, b) => a.who.localeCompare(b.who)).map(this.summaryItem.bind(this))}
                    </Item.Group>
                </Segment>
                <Segment>
                    <Header size="large"><Icon name="history" />History</Header>
                    <Item.Group divided>
                        {debts.sort((a, b) => -a.date.localeCompare(b.date)).map(this.debtItem.bind(this))}
                    </Item.Group>
                </Segment>
            </Segment>
        )
    }
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
}

export default connect(mapStateToProps)(Debts)
