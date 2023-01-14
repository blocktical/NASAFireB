import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { fetchData } from '../RoutingComponent/nasaRouter';
import DisplayBox from './DisplayBox';

export default function FormBox() {
    const [dropKey, setDropKey] = useState('')
    const [data, setData] = useState('')

    const getCityFireBall = () => {
        console.log('Fetching the fireball detail for the city: ', dropKey)
        fetchData({dateMax: "2023-01-11 23:59:50"})
        .then(Response => {
          console.log("This is data: ", Response.data)
          setData(Response.data)
        })
        .catch(e=> alert(e))
    }
    const setKey = (key, event) => {
        console.log("Dropdown Key Change - ", key, event)
        setDropKey(event.target.innerText)
    }


  return (
      <>
      <DisplayBox value={data}/>
      <InputGroup className="mb-3" style={{marginLeft:"auto", marginRight:"auto", width:"400px"}}>
        <InputGroup.Text id="basic-addon1">City</InputGroup.Text>
        <Dropdown onSelect={setKey}>
        <Dropdown.Toggle id="dropdown" variant="secondary" style={{width: '200px'}}>
          {dropKey != ""?dropKey:"Select City"}
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item eventKey='1'>Delhi</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Mumbai</Dropdown.Item>
          <Dropdown.Item eventKey='3'>New York</Dropdown.Item>
          <Dropdown.Item eventKey='4'>Paris</Dropdown.Item>
          <Dropdown.Item eventKey='5'>Manhatan</Dropdown.Item>
          <Dropdown.Item eventKey='6'>Capetown</Dropdown.Item>
          <Dropdown.Item eventKey='7'>Bangalore</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </InputGroup>
      <Button variant="primary" type="submit" onClick={getCityFireBall}>
          Submit
      </Button>
      </>
  )
}
