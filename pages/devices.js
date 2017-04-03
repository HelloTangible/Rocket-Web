import React, { Component } from 'react'
import Layout from '../components/Layout'
import DeviceList from '../components/DeviceList'
import AddDevice from '../components/AddDevice'

class Devices extends Component {
  constructor (props) {
    super(props)

    this.state = {
      openModal: false
    }
    this.toggleDeviceModal = this.toggleDeviceModal.bind(this)
    this.saveDevice = this.saveDevice.bind(this)
  }

  toggleDeviceModal () {
    this.setState((prevState, props) => ({
      openModal: !prevState.openModal
    }))
  }

  saveDevice () {
    return null
  }

  render () {
    return (
      <div>
        <Layout>
          <DeviceList openDeviceModal={this.toggleDeviceModal} />
          <AddDevice saveDevice={this.saveDevice} overlayOpen={this.state.openModal} closeDeviceModal={this.toggleDeviceModal} />
        </Layout>
      </div>
    )
  }
}

export default Devices
