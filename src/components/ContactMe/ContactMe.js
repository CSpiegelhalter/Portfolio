import React, { Component, useEffect } from 'react'
import * as emailjs from 'emailjs-com'
import "./ContactMe.css"

import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'

class ContactMe extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    }
    handleSubmit(e) {
        e.preventDefault()
        const { name, email, phone,  subject, message } = this.state
        let templateParams = {
            from_name: email,
            name: name,
            to_name: 'curt',
            phone: phone,
            subject: subject,
            message: message,
        }
        emailjs.send('service_ame0y6n','template_3qguufu', 
            templateParams,
            
            'user_lXEJ3tVjlgD8uNOO5FOLn'
        )
            
        
        this.resetForm()
    }
    resetForm() {
        this.props.toggle()
        this.setState({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    
    componentDidMount() {
       
            const isNumericInput = (event) => {
                const key = event.keyCode;
                return ((key >= 48 && key <= 57) || // Allow number line
                    (key >= 96 && key <= 105) // Allow number pad
                );
            };
            
            const isModifierKey = (event) => {
                const key = event.keyCode;
                return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
                    (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
                    (key > 36 && key < 41) || // Allow left, up, right, down
                    (
                        // Allow Ctrl/Command + A,C,V,X,Z
                        (event.ctrlKey === true || event.metaKey === true) &&
                        (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
                    )
            };
            
            const enforceFormat = (event) => {
                // Input must be of a valid number format or a modifier key, and not longer than ten digits
                if(!isNumericInput(event) && !isModifierKey(event)){
                    event.preventDefault();
                }
            };
            
            const formatToPhone = (event) => {
                if(isModifierKey(event)) {return;}
            
                // I am lazy and don't like to type things more than once
                const target = event.target;
                const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
                const zip = input.substring(0,3);
                const middle = input.substring(3,6);
                const last = input.substring(6,10);
            
                if(input.length > 6){target.value = `(${zip}) ${middle} - ${last}`;}
                else if(input.length > 3){target.value = `(${zip}) ${middle}`;}
                else if(input.length > 0){target.value = `(${zip}`;}
            };
            
            const inputElement = document.getElementById('phoneNumber');
            inputElement.addEventListener('keydown',enforceFormat);
            inputElement.addEventListener('keyup',formatToPhone);
        
    }
   

    render() {
        
        
        return (
            <>
                <div id="contact" className="contactForm">
                    <h1 className="p-heading1">Let's talk!</h1>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormGroup controlId="formBasicEmail">
                            <Label className="text-muted">Email address*</Label>
                            <Input
                                type="email"
                                name="email"
                                required
                                value={this.state.email}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'email')}
                                placeholder="Enter email"
                            />
                        </FormGroup>
                        <FormGroup controlId="formBasicPhone">
                            <Label className="text-muted">Phone number</Label>
                            <Input
                                type="tel"
                                id="phoneNumber"
                                name="phone"
                                maxlength="16"
                                value={this.state.phone}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'phone')}
                                placeholder="Enter Phone number"
                            />
                            
                        </FormGroup>
                        <FormGroup controlId="formBasicName">
                            <Label className="text-muted">Name*</Label>
                            <Input
                                type="text"
                                name="name"
                                value={this.state.name}
                                required
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'name')}
                                placeholder="Name"
                            />
                        </FormGroup>
                        <FormGroup controlId="formBasicSubject">
                            <Label className="text-muted">Subject</Label>
                            <Input
                                type="text"
                                name="subject"
                                className="text-primary"
                                value={this.state.subject}
                                onChange={this.handleChange.bind(this, 'subject')}
                                placeholder="Subject"
                            />
                        </FormGroup>
                        <FormGroup controlId="formBasicMessage">
                            <Label className="text-muted">Message*</Label>
                            <Input
                                type="textarea"
                                name="message"
                                required
                                className="text-primary"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this, 'message')}
                            />
                        </FormGroup>
                        <Button variant="primary" type="submit">
                            Submit
            </Button>
                    </Form>
                </div>
            </>
        )
    }
}
export default ContactMe