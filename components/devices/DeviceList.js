import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { Panel, PanelHeader, Table, PanelFooter, Button } from 'rebass'
import MdEdit from 'react-icons/lib/md/edit'

class DeviceList extends Component {
  static propTypes = {
    openDeviceModal: PropTypes.func,
    devices: PropTypes.array
  }

  constructor(props) {
    super(props)

    this.editDevice = this.editDevice.bind(this)
  }

  editDevice (device) {
    this.props.openDeviceModal(device)
  }
  
  render () {
    const countOrReturn = item => typeof item === 'object'? item.length : item
    const deviceTable = _.each(
      _.map(this.props.devices, fields => _.map(fields, countOrReturn)),
      (item) => item.push(<MdEdit className={'edit'}
        onClick={() => this.editDevice(item[0])} />)
    )
    
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
            '# of Simulations',
            ''
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
