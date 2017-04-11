import React, { Component } from 'react'
import Layout from '../components/main/Layout'
import DeviceList from '../components/devices/DeviceList'
import AddDevice from '../components/devices/AddDevice'

class Devices extends Component {
  constructor (props) {
    super(props)

    this.state = {
      openModal: false,
      devices: [
        {
          name: 'Particle Photon',
          sensors: [['Temp', 3], ['Humidity', 2], ['Rainfall', 4]],
          simulations: [0, 1, 3]
        },
        {
          name: 'Phillips Hue Bulb',
          sensors: [['Temp', 3], ['Humidity', 2]],
          simulations: []
        },
        {
          name: 'SparkFun MAX',
          sensors: [['Temp', 3]],
          simulations: [0, 1, 2, 3]
        }
      ]
    }
    this.toggleDeviceModal = this.toggleDeviceModal.bind(this)
    this.saveDevice = this.saveDevice.bind(this)
  }

  toggleDeviceModal () {
    this.setState((prevState, props) => ({
      openModal: !prevState.openModal
    }))
  }

  saveDevice (device) {
    let devices = this.state.devices

    this.setState({ devices: [
      ...devices,
      device
    ] })

    // TODO Save to API

    this.toggleDeviceModal()
  }

  render () {
    return (
      <div>
        <Layout>
          <DeviceList openDeviceModal={this.toggleDeviceModal} devices={this.state.devices} />
          <AddDevice saveDevice={this.saveDevice} overlayOpen={this.state.openModal} closeDeviceModal={this.toggleDeviceModal} />
        </Layout>
      </div>
    )
  }
}

export default Devices
