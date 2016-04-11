# MyPIPassessments

Assessment 1 :
---------------

Landing Page should have buttons to  “Log In” or “Register”
All the data will be stored in Javascript (eg : arrays)

On click of Register
--------------------
Create a User Profile HTML form with below fields

	- First name (Max 30 char, mandatory)
	- Last name (Max 30 char, Non Mandatory)
	- Date of Birth (format DD/MM/YYYY, mandatory)
	- Gender : should be a Radio type ( mandatory)
	- Country Drop Down (value and description can be an array hidden,  mandatory)
	- State Drop Down (Map the Country and state in an array and show the state based on the country,
		mandatory)
	- User Id field (need to validate for min 8 char, max 24 char. It should contain alpha numeric with no
		special character,  mandatory)
	- Password  (need to validate for min 8 char, max 24 char. It should contain alpha numeric with min one 	special character,  mandatory)
	- Confirm Password  (Should validate for the same password,  mandatory)

	Action : Submit the form create a login array with the details provided if all the required fields are satisfied else don’t submit

On click of Login
------------------

	- User Id (Free text)
	- Password  (Free text)

	Action : Submit form if user id and password matches any record has registered else show an alert and dont submit the form

Post Login screen
------------------

	- List of Items : Have a multiselect field with list of element (Elements can be a JS list, Mandatory)
	- Comments : Long text upto 500 char (Non Mandatory)

	Action : Submit the form with the items selected to the user logged in and store it in an array and take it a view page.


View Page :
-----------
	- Show the user details in a view with using, Header, Span, Div and Paragraph tags

	- List the items selected for the user in a tabular format with Item Number, Description and availability 	columns.
