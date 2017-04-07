import React, { Component, PropTypes } from 'react'
import AddSensor from './AddSensor'
import { Table, Panel, PanelHeader } from 'rebass'
import MdRemoveCircle from 'react-icons/lib/md/remove-circle'

class SensorList extends Component {
  static propTypes = {
    addToDevice: PropTypes.func
  }
  
  constructor (props) {
    super(props)

    this.state = {
      sensors: []
    }

    this.saveSensor = this.saveSensor.bind(this)
    this.removeSensor = this.removeSensor.bind(this)
  }

  addDevice () {
    return null
  }

  removeSensor (sensorName) {
    let sensors = this.state.sensors.filter((sensor) => {
      return sensor[0] !== sensorName
    })

    this.setState({ sensors: sensors })
  }

  saveSensor (sensor) {
    const sensors = this.state.sensors

    // Add the delete button
    sensor.push(<MdRemoveCircle
      className={'delete'}
      onClick={() => this.removeSensor(sensor[0])} />)

    this.setState({ sensors: [
      ...sensors,
      sensor
    ]})
  }

  render () {
    return (
      <Panel>
        <PanelHeader>
          Sensors
        </PanelHeader>
        <div>
          <Table
            data={this.state.sensors}
            headings={[
              'Name',
              'Type',
              ''
            ]}
          />
        </div>
        <AddSensor addSensor={this.saveSensor} />
      </Panel>
    )
  }
}

export default SensorList
