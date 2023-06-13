import { useState } from 'react';
 
export default function Form() {
 
    const [name, setName] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');
    const [accountType, setAccountType] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    const handleDateofbirth = (e) => {
        setDateofbirth(e.target.value);
        setSubmitted(false);
    };
 
    const handleAccountType = (e) => {
        setAccountType(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || dateofbirth === '' || accountType === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
 
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };
 
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };
 
    return (
        <div className="form">
            <div>
                <h1>Bank Account Registration</h1>
            </div>
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
 
            <form>
                <label className="label">Name: </label>
                <input onChange={handleName} className="input"
                    value={name} type="text" /><br></br><br></br>
 
                <label className="label">Date of Birth: </label>
                <input onChange={handleDateofbirth} className="input"
                    value={dateofbirth} type="date" />
                <br></br><br></br>
 
                <label className="label">Account Type: </label>
                <input onChange={handleAccountType} className="input"
                    value={accountType} type="text" />
                    <br></br><br></br>
                <button onClick={handleSubmit} className="btn"
                        type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}