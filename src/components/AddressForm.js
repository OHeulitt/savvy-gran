// import { useState } from "react";

function AddressForm (props) {

	const { userInput, submit, handleUser, reset } = props;

    return (
		<main>

			{/* address form with inputs for first name, last name, 2 address lines, city, zipcode, and state dropdown */}
			<form action="submit" className="flex" onSubmit={submit} onReset={reset}>
				
				<label htmlFor="firstName" className="sr-only">First Name</label>
				<input type="text" name="firstName" id="firstName" placeholder="First name" required value={userInput.firstName} onChange={handleUser}  />

				<label htmlFor="lastName" className="sr-only">Last name</label>
				<input type="text" name="lastName" id="lastName" placeholder="Last name" required value={userInput.lastName} onChange={handleUser} />

				<label htmlFor="addressLineOne" className="sr-only"></label>
				<input type="text" name="addressOne" id="addressLineOne" placeholder="House number and street name" required value={userInput.addressOne} onChange={handleUser} />

				<label htmlFor="addressLineTwo" className="sr-only">Address Line 2 - apartment number,etc.</label>
				<input type="text" name="addressTwo" id="addressLineTwo" placeholder="Apartment, suite, unit, etc. (optional)" value={userInput.addressTwo} onChange={handleUser}/>

				<label htmlFor="city" className="sr-only">City</label>
				<input type="text" name="city" id="city" placeholder="City" required value={userInput.city} onChange={handleUser} />

				<label htmlFor="stateSelect" className="sr-only">Choose your state</label>
				<select name="stateSelect" id="stateSelect" required value={userInput.stateSelect} onChange={handleUser}>
					<option value="" >State</option>
					<option value="AL">Alabama</option>
					<option value="AK">Alaska</option>
					<option value="AZ">Arizona</option>
					<option value="AR">Arkansas</option>
					<option value="CA">California</option>
					<option value="CO">Colorado</option>
					<option value="CT">Connecticut</option>
					<option value="DE">Delaware</option>
					<option value="DC">District of Columbia</option>
					<option value="FL">Florida</option>
					<option value="GA">Georgia</option>
					<option value="HI">Hawaii</option>
					<option value="ID">Idaho</option>
					<option value="IL">Illinois</option>
					<option value="IN">Indiana</option>
					<option value="IA">Iowa</option>
					<option value="KS">Kansas</option>
					<option value="KY">Kentucky</option>
					<option value="LA">Louisiana</option>
					<option value="ME">Maine</option>
					<option value="MD">Maryland</option>
					<option value="MA">Massachusetts</option>
					<option value="MI">Michigan</option>
					<option value="MN">Minnesota</option>
					<option value="MS">Mississippi</option>
					<option value="MO">Missouri</option>
					<option value="MT">Montana</option>
					<option value="NE">Nebraska</option>
					<option value="NV">Nevada</option>
					<option value="NH">New Hampshire</option>
					<option value="NJ">New Jersey</option>
					<option value="NM">New Mexico</option>
					<option value="NY">New York</option>
					<option value="NC">North Carolina</option>
					<option value="ND">North Dakota</option>
					<option value="OH">Ohio</option>
					<option value="OK">Oklahoma</option>
					<option value="OR">Oregon</option>
					<option value="PA">Pennsylvania</option>
					<option value="RI">Rhode Island</option>
					<option value="SC">South Carolina</option>
					<option value="SD">South Dakota</option>
					<option value="TN">Tennessee</option>
					<option value="TX">Texas</option>
					<option value="UT">Utah</option>
					<option value="VT">Vermont</option>
					<option value="VA">Virginia</option>
					<option value="WA">Washington</option>
					<option value="WV">West Virgina</option>
					<option value="WI">Wisconsin</option>
					<option value="WY">Wyoming</option>
				</select>

				<label htmlFor="zipcode" className="sr-only">Zipcode</label>
				<input type="text" name="zipcode" id="zipcode" placeholder="Zipcode" required value={userInput.zipcode} onChange={handleUser} />

				<button type="reset">Reset Form</button>

				<button type="submit" className="submitButton">Save Address</button>
				

			</form>

		</main>
    )
}

export default AddressForm;