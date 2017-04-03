import React, { Component, PropTypes } from 'react'
import { Panel, PanelHeader, Table, PanelFooter, Button } from 'rebass'

class DeviceList extends Component {
  static propTypes = {
    openDeviceModal: PropTypes.func
  }
  
  render () {
    return (
      <Panel theme='info' style={{ marginTop: '25px', marginRight: '1em', borderColor: '#3ca2e0' }}>
        <PanelHeader inverted>
          Device List
        </PanelHeader>
        <Table
          data={[
            [
              'Particle Photon',
              '3',
              '5'
            ],
            [
              'Phillips Hue Bulb',
              '3',
              '0'
            ],
            [
              'SparkFun MAX',
              '1',
              '4'
            ]
          ]}
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
