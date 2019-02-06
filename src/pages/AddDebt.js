import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { array, func, bool } from 'prop-types'
import { Form, Segment } from 'semantic-ui-react'
import moment from 'moment'

const toOptions = (label) => ({ key: label, text: label, value: label })

const initialState = () => ({
    debt: true,
    who: '',
    amount: '',
    for: '',
    comment: '',
    errorAmount: false,
    errorContact: false,
    errorReason: false,
    errorTimer: null,
})

class AddDebt extends Component {
    constructor(props) {
        super(props)
        this.state = initialState()
    }

    render() {
        const { reasons, contacts, whiteTheme } = this.props
        let {errorAmount, errorContact, errorReason, debt, who, for: reason, comment, amount} = this.state
        return (
            <div>
                <Segment inverted={whiteTheme} basic style={{ height: '100vh'}}>
                    <Form
                        inverted={whiteTheme}
                        onSubmit={() => {
                            amount = Number(amount)
                            if (!amount)
                                errorAmount = true
                            if (!who)
                                errorContact = true
                            if (!reason)
                                errorReason = true

                            if (!errorAmount && !errorContact && !errorReason) {
                                this.props.dispatch({
                                    type: 'AddDebt',
                                    value: {
                                        who: who,
                                        amount: debt ? -amount : amount,
                                        reason: reason,
                                        comment: comment,
                                        date: moment().format(),
                                        paid: false,
                                    },
                                })
                                if (this.state.errorTimer)
                                    clearTimeout(this.state.errorTimer)
                                const newstate = initialState()
                                newstate.debt = this.state.debt
                                this.setState(newstate)
                            } else {
                                if (this.state.errorTimer)
                                    clearTimeout(this.state.errorTimer)
                                this.setState({errorAmount, errorReason, errorContact, errorTimer: setTimeout(()=>this.setState({errorAmount: false, errorReason: false, errorContact: false}), 3000)})
                            }
                        }}
                    >
                        {this.state.debt ?
                            <Fragment>
                                <Form.Input required error={errorAmount} type="number" step="0.01" label='You owe' placeholder='Amount...' value={this.state.amount} onChange={(_, e) => this.setState({ amount: e.value })} />
                                <Form.Select required error={errorContact} label='To' options={contacts.sort().map(toOptions)} placeholder='Contact...' value={this.state.who} onChange={(_, e) => this.setState({ who: e.value })} />
                            </Fragment>
                            :
                            <Fragment>
                                <Form.Select required error={errorContact} label='Contact' options={contacts.sort().map(toOptions)} placeholder='Contact...' value={this.state.who} onChange={(_, e) => this.setState({ who: e.value })} />
                                <Form.Input required error={errorAmount} type="number" step="0.01" label='Owes you' placeholder='Amount...' value={this.state.amount} onChange={(_, e) => this.setState({ amount: e.value })} />
                            </Fragment>
                        }
                        <Form.Select required error={errorReason} label='For' options={reasons.sort().map(toOptions)} placeholder='Reason...' value={this.state.for} onChange={(_, e) => this.setState({ for: e.value })} />
                        <Form.Input label='Comment (optional)' placeholder='Comment...' value={this.state.comment} onChange={(_, e) => this.setState({ comment: e.value })} />
                        <Form.Group widths="equal">
                            <Form.Button color="blue" basic fluid onClick={(e) => {
                                e.preventDefault()
                                this.setState((state) => ({ debt: !state.debt }))
                            }}>Toggle reciever</Form.Button>
                            <Form.Button color="green" basic fluid>Add debt</Form.Button>
                        </Form.Group>
                    </Form>
                </Segment>
            </div>
        )
    }
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
