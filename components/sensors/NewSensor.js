import React, { Component, PropTypes } from 'react'
import { Input, Select, Button } from 'rebass'
import { Flex, Box } from 'reflexbox'
import MdAdd from 'react-icons/lib/md/add'

const initialState = {
  sensorName: '',
  type: 0
}

const sensorTypeOptions = [
  {
    children: 'Type...',
    value: 0
  },
  {
    children: 'Temp',
    value: 1
  },
  {
    children: 'PSI',
    value: 1
  },
  {
    children: 'Bar',
    value: 2
  },
  {
    children: 'Humidity',
    value: 3
  },
  {
    children: 'Rainfall',
    value: 4
  },
  {
    children: 'Moisture',
    value: 5
  }
]

class NewSensor extends Component {
  static propTypes = {
    addSensor: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = initialState
    this.addSensor = this.addSensor.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  addSensor(e) {
    this.props.addSensor([
      this.state.sensorName, 
      sensorTypeOptions[this.state.type].children]
    )

    this.setState(initialState)
    e.preventDefault()
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <Flex align="center">
        <style jsx global>{`
          .button-icon {
            font-size: 1.1em;
            color: #fff;
          }
          .Flex div {
            margin-bottom: 0;
          }
        `}</style>
        <Box col={5}>
          <Input label="" name="sensorName" placeholder="Name" 
            value={this.state.sensorName} mb={0}
            onChange={this.handleChange} rounded type="text"/>
        </Box>
        <Box p={1} col={6}>
          <Select label="" name="type" mb={0} options={sensorTypeOptions} 
            value={this.state.type}
            onChange={this.handleChange} rounded />
        </Box>
        <Box col={2}>
          <Button onClick={this.addSensor}><MdAdd className="button-icon" /></Button>
        </Box>
      </Flex>
    )
  }
}

export default NewSensor
