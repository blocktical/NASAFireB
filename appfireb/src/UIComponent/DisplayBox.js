import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Form from 'react-bootstrap/Form'

export default function DisplayBox(props) {
  return (
    <Form.Control
        as="textarea"
        rows={20}
        type="text"
        id="textArea"
        value={props.value}
      />
  )
}
