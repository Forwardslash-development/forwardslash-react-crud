import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useHistory } from 'react-router';

export default function Update() {
  let history = useHistory();
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setCheckbox(localStorage.getItem('Checkbox Value'));
}, []);

const updateAPIData = () => {
  axios.put(`https://6101a72249a537001787124e.mockapi.io/api/v1/forwardslashData/${id}`, {
      firstName,
      lastName,
      checkbox
  }).then(() => {
      history.push('/read')
  })
}

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}