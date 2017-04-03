import React, { Component, PropTypes } from 'react'
import { Panel, PanelHeader, PanelFooter, Button, Overlay, Space, Close, Input } from 'rebass'

class AddDevice extends Component {
  static propTypes = {
    overlayOpen: PropTypes.bool,
    saveDevice: PropTypes.func,
    closeDeviceModal: PropTypes.func
  }
  
  constructor (props) {
    super(props)

    this.state = {
      deviceName: ''
    }
    this.addDevice = this.addDevice.bind(this)
  }

  addDevice () {
    return null
  }

  render () {
    return (
      <Overlay open={this.props.overlayOpen}>
        <Panel theme='info' style={{ marginTop: '25px', marginRight: '1em' }}>
          <PanelHeader inverted>
            Add Device
            <Space auto />
            <Close onClick={this.props.closeDeviceModal} />
          </PanelHeader>
          <form>
            <Input name='name' label='Name' value={this.state.deviceName} />
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
