import React, { Component, PropTypes } from 'react'
import NewSensor from './NewSensor'
import { Table, Panel, PanelHeader } from 'rebass'
import MdRemoveCircle from 'react-icons/lib/md/remove-circle'

class SensorList extends Component {
  static propTypes = {
    updateSensors: PropTypes.func,
    sensors: PropTypes.array
  }
  
  constructor (props) {
    super(props)

    this.saveSensor = this.saveSensor.bind(this)
    this.removeSensor = this.removeSensor.bind(this)
  }

  removeSensor (sensorName) {
    let sensors = this.props.sensors.filter((sensor) => {
      return sensor[0] !== sensorName
    })

    this.props.updateSensors(sensors)
  }

  saveSensor (sensor) {
    const sensors = this.props.sensors

    // Add the delete button
    sensor.push(<MdRemoveCircle
      className={'delete'}
      onClick={() => this.removeSensor(sensor[0])} />)

    this.props.updateSensors([
      ...sensors,
      sensor
    ])
  }

  render () {
    return (
      <Panel>
        <PanelHeader>
          Sensors
        </PanelHeader>
        <div>
          <Table
            data={this.props.sensors}
            headings={[
              'Name',
              'Type',
              ''
            ]}
          />
        </div>
        <NewSensor addSensor={this.saveSensor} />
      </Panel>
    )
  }
}

export default SensorList
