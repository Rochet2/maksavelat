import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { array, func, bool } from 'prop-types'
import { Form, Segment, Button } from 'semantic-ui-react'
import moment from 'moment'

const toOptions = (label) => ({ key: label, text: label, value: label })

const initialState = () => ({
    debt: true,
    who: '',
    amount: '',
    for: '',
    comment: '',
})

class AddDebt extends Component {
    constructor(props) {
        super(props)
        this.state = initialState()
    }

    render() {
        const { reasons, contacts, whiteTheme } = this.props
        return (
            <div>
                <Segment inverted={whiteTheme} basic style={{ height: '100vh'}}>
                    <Form
                        inverted={whiteTheme}
                        onSubmit={() => {
                            this.props.dispatch({
                                type: 'AddDebt',
                                value: {
                                    who: this.state.who,
                                    amount: this.state.debt ? -Number(this.state.amount) : Number(this.state.amount),
                                    reason: this.state.for,
                                    comment: this.state.comment,
                                    date: moment().format(),
                                    paid: false,
                                },
                            })
                            this.setState(initialState())
                        }}
                    >
                        {this.state.debt ?
                            <Fragment>
                                <Form.Input required type="number" label='You owe' placeholder='Amount...' value={this.state.amount} onChange={(_, e) => this.setState({ amount: e.value })} />
                                <Form.Select required label='To' options={contacts.map(toOptions)} placeholder='Contact...' value={this.state.who} onChange={(_, e) => this.setState({ who: e.value })} />
                            </Fragment>
                            :
                            <Fragment>
                                <Form.Select required label='Contact' options={contacts.map(toOptions)} placeholder='Contact...' value={this.state.who} onChange={(_, e) => this.setState({ who: e.value })} />
                                <Form.Input required type="number" label='Owes you' placeholder='Amount...' value={this.state.amount} onChange={(_, e) => this.setState({ amount: e.value })} />
                            </Fragment>
                        }
                        <Form.Select required label='For' options={reasons.map(toOptions)} placeholder='Reason...' value={this.state.for} onChange={(_, e) => this.setState({ for: e.value })} />
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
