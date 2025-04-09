import { useState } from 'react';

type OrderFormData = {
    ConcertId: number;
    Name: string;
    Email: string;
    Phone: string;
    Quantity: number;
    CreditCard: string;
    Expiration: string;
    SecurityCode: string;
    Address: string;
    City: string;
    Province: string;
    PostalCode: string;
    Country: string;
};

const OrderForm = ({concertId}: {concertId: String}) => {
    const concertNum: number = Number(concertId);
    const [errorMessage, setErrorMessage] = useState<string[]>([]);
    const [submittedForm, setSubmittedForm] = useState(false);

    const [values, setValues] = useState<OrderFormData>({
        ConcertId: concertNum,
        Name: '',
        Email: '',
        Phone: '',
        Quantity: 1,
        CreditCard: '',
        Expiration: '',
        SecurityCode: '',
        Address: '',
        City: '',
        Province: '',
        PostalCode: '',
        Country: "Canada"
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setValues({...values,[event.target.name] : event.target.value})
    }

    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
          const response = await fetch('https://0746tickethub-g3bwaubsb3d0asf9.canadacentral-01.azurewebsites.net/api/orders', { 
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
    
          if (!response.ok) {
            const errorData = await response.json();
            console.error('Error submitting order:', errorData);
            if (errorData.status = 400){
                const errorMessages: string[] = [];
                for (const errorType in errorData.errors){
                    if(errorData.errors.hasOwnProperty(errorType) && Array.isArray(errorData.errors[errorType])){
                        errorData.errors[errorType].forEach((error) =>{
                            errorMessages.push(`${errorType}: ${error}`)
                        })
                    }
                }
                
                setErrorMessage(errorMessages);
            }
            return;
          }
    
          console.log('Order submitted successfully:');
          setSubmittedForm(true);
          setErrorMessage([]);
        } catch (error) {
          console.error('There was an error sending the order:', error);
          setErrorMessage(["Unknown: An error occured. Please try again later."]);
        }
    }

    return(
        <>
            {errorMessage && (
                <div className="error">
                    <ul>
                        {errorMessage.map((e: string, index) => (
                            <li key={index}>{e}</li>
                        ))}
                    </ul>
                </div>
            )}

            {!submittedForm && (
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Name:
                        <input
                            name="Name" 
                            type="text"
                            maxLength={100}
                            onChange={handleChange}
                            value={values["Name"]}
                            required
                        />
                    </label>

                    
                    <label>Email:
                        <input
                            name="Email" 
                            type="email"
                            onChange={handleChange}
                            value={values["Email"]}
                            placeholder="name@domain.com"
                            required
                        />
                    </label>
                    
                    <label>Phone Number:
                        <input
                            name="Phone" 
                            type="tel"
                            onChange={handleChange}
                            value={values["Phone"]}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder='000-555-0123'
                            required
                        />
                    </label>
                    
                    <label>Number of Tickets:
                        <input
                            name="Quantity" 
                            type="number"
                            min={1}
                            max={5}
                            onChange={handleChange}
                            value={values["Quantity"]}
                            required
                        />
                    </label>
                    
                    <label>Credit Card Number:
                        <input
                            name="CreditCard" 
                            type="number"
                            onChange={handleChange}
                            value={values["CreditCard"]}
                            required
                        />
                    </label>
                    
                    <label>Expiration Code:
                        <input
                            name="Expiration" 
                            type="text"
                            onChange={handleChange}
                            value={values["Expiration"]}
                            pattern="^(0[1-9]|1[0-2])\/([0-9]{4})$"
                            placeholder="MM/YYYY"
                            required
                        />
                    </label>
                    
                    <label>Security Code:
                        <input
                            name="SecurityCode" 
                            type="text"
                            onChange={handleChange}
                            value={values["SecurityCode"]}
                            pattern="\d{3,4}"
                            required
                        />
                    </label>
                    
                    <label>Address:
                        <input
                            name="Address" 
                            type="text"
                            onChange={handleChange}
                            value={values["Address"]}
                            maxLength={120}
                            required
                        />
                    </label>
                    
                    <label>City:
                        <input
                            name="City" 
                            type="text"
                            onChange={handleChange}
                            value={values["City"]}
                            maxLength={31}
                            required
                        />
                    </label>
                    
                    <label>Province:
                        <select name="Province" value={values["Province"]} onChange={handleChange}>
                            <option value="AB">Alberta</option>
                            <option value="BC">British Columbia</option>
                            <option value="MB">Manitoba</option>
                            <option value="NB">New Brunswick</option>
                            <option value="NL">Newfoundland and Labrador</option>
                            <option value="NT">Northwest Territories</option>
                            <option value="NS">Nova Scotia</option>
                            <option value="NU">Nunavut</option>
                            <option value="ON">Ontario</option>
                            <option value="PE">PEI</option>
                            <option value="QC">Quebec</option>
                            <option value="SK">Saskatchewan</option>
                            <option value="YT">Yukon</option>
                        </select>
                    </label>
                    
                    <label>Postal Code:
                        <input
                            name="PostalCode" 
                            type="text"
                            onChange={handleChange}
                            value={values["PostalCode"]}
                            placeholder="A1A 1A1"
                            pattern="[A-Za-z][0-9][A-Za-z]\s[0-9][A-Za-z][0-9]"
                            required
                        />
                    </label>
                    
                    <label>Country:
                        <input
                            name="Country" 
                            type="text"
                            value={values["Country"]}
                            disabled
                        />
                    </label>

                    <button type={"submit"}>Submit</button>
                </form>
            )}

            {submittedForm && (
                <h3>Order successfully placed!</h3>
            )}
        </>
    )
}

export default OrderForm;