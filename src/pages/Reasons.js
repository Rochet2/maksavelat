import React, { Component } from 'react';
import { connect } from 'react-redux'
import { array, func, bool } from 'prop-types'
import { Header, Button, Segment, Input, List } from 'semantic-ui-react'

class Reasons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    render() {
        const { whiteTheme, dispatch, reasons } = this.props
        return (
            <div>
                <Segment inverted={whiteTheme} basic style={{ height: '100vh' }}>
                    <Header size="large">Reasons</Header>
                    <Input
                        action={{ content: 'Add reason', onClick: () => dispatch({ type: 'AddReason', value: this.state.value }) }}
                        placeholder='Reason name...'
                        onChange={(e => this.setState({ value: e.target.value }))}
                    />
                    <List inverted={whiteTheme} divided>
                        {reasons.map(reason => (
                            <List.Item key={reason}>
                                <List.Content floated="right">
                                    <Button
                                        color='red'
                                        content={'Remove'}
                                        icon='remove'
                                        onClick={() => dispatch({ type: 'RemoveReason', value: reason })}
                                    />
                                </List.Content>
                                <List.Header>
                                    {reason}
                                </List.Header>
                            </List.Item>
                        ))}
                    </List>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        reasons: state.reasons,
        whiteTheme: state.whiteTheme,
    }
}

Reasons.propTypes = {
    reasons: array.isRequired,
    dispatch: func.isRequired,
    whiteTheme: bool.isRequired,
}

export default connect(mapStateToProps)(Reasons)
