import React, { useState } from 'react';
import { connect } from 'react-redux'
import { array, func, bool } from 'prop-types'
import { Header, Button, Segment, Input, List, Divider } from 'semantic-ui-react'

function Reasons({ whiteTheme, dispatch, reasons }) {
  const [value, setValue] = useState('')
  return (
    <div>
      <Segment inverted={whiteTheme} basic style={{ height: '100vh' }}>
        <Header size="large">Reasons</Header>
        <Input
          fluid
          size="big"
          action={{
            content: 'Add reason', onClick: () => {
              dispatch({ type: 'AddReason', value })
              setValue('')
            }
          }}
          placeholder='Reason name...'
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <Divider />
        <List inverted={whiteTheme} divided>
          {reasons.map(reason => (
            <List.Item key={reason}>
              <List.Content floated="right">
                <Button
                  color='red'
                  content={'Remove'}
                  icon='remove'
                  onClick={() => {
                    dispatch({ type: 'RemoveReason', value: reason })
                  }}
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
