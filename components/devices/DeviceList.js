import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { Panel, PanelHeader, Table, PanelFooter, Button } from 'rebass'

var deviceTable = []

class DeviceList extends Component {
  static propTypes = {
    openDeviceModal: PropTypes.func,
    devices: PropTypes.array
  }
  
  render () {
    const countOrReturn = item => typeof item === 'object'? item.length : item
    deviceTable = _.map(this.props.devices, fields => _.map (fields, countOrReturn))
    
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
