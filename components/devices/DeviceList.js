import React, { Component, PropTypes } from 'react'
import { Panel, PanelHeader, Table, PanelFooter, Button } from 'rebass'

var deviceTable = []

class DeviceList extends Component {
  static propTypes = {
    openDeviceModal: PropTypes.func,
    devices: PropTypes.array
  }

  componentWillMount () {
    const countOrReturn = item => typeof item === 'object'? item.length : item
    
    deviceTable = this.props.devices.map( fields => fields.map ( countOrReturn ))
  }
  
  render () {
    return (
      <Panel theme='info' style={{ marginTop: '25px', marginRight: '1em', borderColor: '#3ca2e0' }}>
        <PanelHeader inverted>
          Device List
        </PanelHeader>
        <Table
          data={deviceTable}
          headings={[
            'Name',
            'Sensors',
            '# of Simulations'
          ]}
        />
        <PanelFooter theme='default'>
          <Button onClick={this.props.openDeviceModal}>+</Button>
        </PanelFooter>
      </Panel>
    )
  }
}

export default DeviceList
