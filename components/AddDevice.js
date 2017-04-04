import React, { Component, PropTypes } from 'react'
import { Table, Panel, PanelHeader, PanelFooter, Button, Overlay, Space, Close, Input } from 'rebass'

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
      sensors: [],
      actuators: []
    }
    this.addDevice = this.addDevice.bind(this)
    this.addSensor = this.addSensor.bind(this)
    this.addActuator = this.addActuator.bind(this)
  }

  addDevice () {
    return null
  }

  addSensor () {

  }

  addActuator () {

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
            <Input name='name' label='Name' value={this.state.deviceName} />
            <Panel>
              <PanelHeader>
                Sensors
              </PanelHeader>
              <div>
                <Table
                  data={[
                    [
                      'Temperature',
                      'Farenheit'
                    ],
                    [
                      'Humidity',
                      'Bar'
                    ],
                    [
                      'Rainfall',
                      'Inches'
                    ]
                  ]}
                  headings={[
                    'Name',
                    'Type'
                  ]}
                />
              </div>
              <PanelFooter theme='default'>
                <Button onClick={this.addSensor}>Add</Button>
              </PanelFooter>
            </Panel>
            <Panel>
              <PanelHeader>
                Actuators
              </PanelHeader>
              <div>None</div>
              <PanelFooter theme='default'>
                <Button onClick={this.addActuator}>Add</Button>
              </PanelFooter>
            </Panel>
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
