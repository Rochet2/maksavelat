import React, { Component } from 'react';
import { connect } from 'react-redux'
import { array, func, bool } from 'prop-types'
import { Header, Button, Segment, Input, List } from 'semantic-ui-react'

class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    render() {
        const { whiteTheme, dispatch, contacts } = this.props
        return (
            <Segment inverted={whiteTheme} basic style={{ height: '100vh' }}>
                <Header size="large">Contacts</Header>
                <Input
                    action={{ content: 'Add contact', onClick: () => {
                        dispatch({ type: 'AddContact', value: this.state.value })
                        this.setState({ value: '' })
                    }}}
                    placeholder='Contact name...'
                    onChange={(e => this.setState({ value: e.target.value }))}
                    value={this.state.value}
                />
                <List inverted={whiteTheme} divided>
                    {contacts.sort().map(contact => (
                        <List.Item key={contact}>
                            <List.Content floated='right'>
                                <Button
                                    color='red'
                                    content={'Remove'}
                                    icon='remove'
                                    onClick={() => {
                                        dispatch({ type: 'RemoveContact', value: contact })
                                    }}
                                />
                            </List.Content>
                            <List.Header>
                                {contact}
                            </List.Header>
                        </List.Item>
                    ))}
                </List>
            </Segment>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        whiteTheme: state.whiteTheme,
    }
}

Contacts.propTypes = {
    contacts: array.isRequired,
    dispatch: func.isRequired,
    whiteTheme: bool.isRequired,
}

export default connect(mapStateToProps)(Contacts)
