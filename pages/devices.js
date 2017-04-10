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
        [
          'Particle Photon',
          [['Temp', 3], ['Humidity', 2], ['Rainfall', 4]],
          [0, 1, 3]
        ],
        [
          'Phillips Hue Bulb',
          [['Temp', 3], ['Humidity', 2]],
          []
        ],
        [
          'SparkFun MAX',
          [['Temp', 3]],
          [0, 1, 2, 3]
        ]
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
      device,
      ...devices
    ] })

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
