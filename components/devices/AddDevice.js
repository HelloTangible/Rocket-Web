import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import SensorList from '../sensors/SensorList'
import { Table, Panel, PanelHeader, PanelFooter, Button, Overlay, Space, Close, Input } from 'rebass'

class AddDevice extends Component {
  static propTypes = {
    overlayOpen: PropTypes.bool,
    device: PropTypes.object,
    saveDevice: PropTypes.func,
    closeDeviceModal: PropTypes.func
  }
  
  constructor (props) {
    super(props)

    this.state = {
      deviceName: '',
      sensors: [],
      actuators: []
    }
    this.addDevice = this.addDevice.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.updateSensors = this.updateSensors.bind(this)
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
    this.props.saveDevice(this.state)
  }

  updateSensors (sensors) {
    this.setState({ sensors: sensors })
  }

  componentWillReceiveProps(nextProps) {
    if(!_.isEmpty(nextProps.device)) {
      this.setState({ 
        deviceName: nextProps.device.name,
        sensors: nextProps.device.sensors
      })
    }
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
            <SensorList updateSensors={this.updateSensors} sensors={this.state.sensors} />
          </form>
          <PanelFooter theme='default'>
            <Button onClick={this.addDevice}>Save</Button>
          </PanelFooter>
        </Panel>
      </Overlay>
    )
  }
}

export default AddDevice
