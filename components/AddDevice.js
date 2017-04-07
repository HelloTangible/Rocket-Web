import React, { Component, PropTypes } from 'react'
import SensorList from './sensors/SensorList'
import { Table, Panel, PanelHeader, PanelFooter, Button, Overlay, Space, Close, Input } from 'rebass'
import MdRemoveCircle from 'react-icons/lib/md/remove-circle'

const deleteButton = <MdRemoveCircle className={'delete'} />

class AddDevice extends Component {
  static propTypes = {
    overlayOpen: PropTypes.bool,
    saveDevice: PropTypes.func,
    closeDeviceModal: PropTypes.func
  }
  
  constructor (props) {
    super(props)

    this.state = {
      deviceName: '',
      sensors: []
    }
    this.addDevice = this.addDevice.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addDevice () {
    return null
  }

  render () {
    return (
      <Overlay open={this.props.overlayOpen} style={{ width: '40rem' }}>
        <Panel theme='info' style={{ marginTop: '25px', marginRight: '1em' }}>
          <PanelHeader inverted>
            Add Device
            <Space auto />
            <Close onClick={this.props.closeDeviceModal} />
          </PanelHeader>
          <form>
            <Input name='deviceName' label='Name' 
              value={this.state.deviceName}
              onChange={this.handleChange} />
            <SensorList />
          </form>
          <PanelFooter theme='default'>
            <Button onClick={this.addDevice}>Add</Button>
          </PanelFooter>
        </Panel>
      </Overlay>
    )
  }
}

export default AddDevice
