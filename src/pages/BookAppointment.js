import React from 'react';
import styled from 'styled-components';

// components
import Card from '../components/Card';
import Button from '../components/Button';
import CodeH1 from '../components/CodeH1';

const FormContainer = styled.div`
    width: 450px;
    margin: auto;
    margin-top: 40px;
`;

class BookAppointment extends React.Component {
    constructor() {
        super();

        // state stores the form
        this.state = {
            name: '',
            service: "manicure",
            number: '',
            message: ''
        };
    }

    // print the form in the console as one object
    handleSubmit = () => {
        console.log(this.state);
        this.setState({
            name: '',
            number: '',
            message: ''
        });
    }

    render() {
        const {name, number, message} = this.state;

        return (
            <FormContainer className="mb-5">
                <CodeH1>Book an Appointment!</CodeH1>
                <h3 className="mb-3">(Check the console after submitting)</h3>
                <Card>
                    {/* Name field */}
                    <div className="form-group mb-4">
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            className="form-control"
                            onChange={(event) => this.setState({name: event.target.value})}
                            value={name}
                        ></input>
                    </div>

                    {
                    /* 
                    * Dropdown menu, from
                    * https://blog.hubspot.com/website/html-dropdown
                    */
                    }
                    <div className="form-group mb-4">
                        <label htmlFor="services">Type of service:</label>
                        <br></br>
                        <select
                            id="services"
                            name="services"
                            onChange={(event) => this.setState({service: event.target.value})}
                        >
                            <option value="manicure">Manicure</option>
                            <option value="pedicure">Pedicure</option>
                            <option value="massage">Massage</option>
                            <option value="facial">Facial</option>
                        </select>
                    </div>

                    {/* Phone number field */}
                    <div className="form-group mb-4">
                        <label htmlFor="number">Phone number:</label>
                        <input 
                            type="text" 
                            id="number" 
                            className="form-control"
                            onChange={(event) => this.setState({number: event.target.value})}
                            value={number}
                        ></input>
                    </div>

                    {/* Message field */}
                    <div className="form-group mb-4">
                        <label htmlFor="message">Message:</label>
                        <textarea 
                            id="message" 
                            className="form-control" 
                            rows="4"
                            value={message}
                            onChange={(event) => this.setState({message: event.target.value})}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <Button colour="purple" onClick={this.handleSubmit}>Submit</Button>
                    </div>
                </Card>
            </FormContainer>
        );
    }
}

export default BookAppointment;