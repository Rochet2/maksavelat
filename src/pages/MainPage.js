import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MySegment = ({to, linkProps, segmentProps, children}) => <Link to={to} {...linkProps}><Segment padded="very" {...segmentProps}>{children}</Segment></Link>

const MainPage = () => (
<Container textAlign="center" fluid style={{ cursor: 'pointer', height: '100%' }}>
<Segment.Group>
    <MySegment to="/AddDebt">
    {/* <MyIcon name='user' />
    <MyIcon name='arrow right' />
    <MyIcon name='euro sign' /> */}
    <Header>Add debt</Header>
    </MySegment>
    <MySegment to="/Debts">
    {/* <MyIcon name='user' />
    <MyIcon name='handshake' />
    <MyIcon name='user' /> */}
    <Header>Debts</Header>
    </MySegment>
    <MySegment to="/Contacts">
    {/* <MyIcon name='users' /> */}
    <Header>Edit contacts</Header>
    </MySegment>
    <MySegment to="/Reasons">
    {/* <MyIcon name='users' /> */}
    <Header>Edit reasons</Header>
    </MySegment>
</Segment.Group>
</Container>
)

export default MainPage
