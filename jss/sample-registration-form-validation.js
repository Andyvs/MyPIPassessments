    // // Onload Function
    // // Loading the value and description of country in an array
    var stateObject = {
        "India": {
            "Karnataka": [],
            "Mumbai": []
        },
        "USA": {
            "Texas": [],
            "SA": []
        }
    };

    function setCountries() {
        var countySel = document.getElementById("countySel"),
            stateSel = document.getElementById("stateSel");
        for (var country in stateObject) {
            countySel.options[countySel.options.length] = new Option(country, country);
        }
        countySel.onchange = function() {
            stateSel.length = 1; // remove all options bar first
            if (this.selectedIndex < 1) return; // done   
            for (var state in stateObject[this.value]) {
                stateSel.options[stateSel.options.length] = new Option(state, state);
            }
        }
    }

    // formValidation for Register Form
    var userDet = new Array();

    function formValidation(formObj) {
        var Fname = formObj['firstname'];
        var Lname = formObj['lastname'];
        var dob = formObj['dob'];
        var gender = formObj['Gender'];
        var uid = formObj['userid'];
        var passid = formObj['passid'];
        var conf_psw = formObj['confpassid'];
        var ucountry = formObj['countySel'];
        var ustate = formObj['stateSel'];

        // Method are being called from each condition to validate the fields
        if (ValidateFName(Fname) && ValidateLName(Lname) && ValidateDOB(dob) && ValidateGender(gender) &&
            ValidateUserId(uid) && ValidatePSW(passid) && ValidateConfPSW(passid, conf_psw) &&
            ValidateCountry(ucountry) && ValidateState(ustate)) {

            // Local Storage
            storeData = window.localStorage;

            //Store data in localstorage for persistance.
            storeData.setItem("FirstName", userDet.firstname);
            storeData.setItem("LastName", userDet.lastname);
            storeData.setItem("DateOfBirth", userDet.dob);
            storeData.setItem("Gender", userDet.gender);
            storeData.setItem("UserID", userDet.userid);
            storeData.setItem("Password", userDet.password);
            storeData.setItem("Country", userDet.country);
            storeData.setItem("State", userDet.state);

            return true;
        } else {
            return false;
        }
    };

    // User First Name Validation
    function ValidateFName(f_name, min, max) {
        regx = /^[a-zA-Z ]*$/;

        // Function invoking for validating empty fields.
        if (!validateEmptyFields(f_name)) {
            return false;
        } else if (!validateMinMax(f_name, 8, 24)) {
            return false;
        } else if (regx.test(f_name.value)) {
            userDet['firstname'] = f_name.value;
            return true;
        } else {
            alert("User First Name should be Alphabet");
        }
    };

    // User Last Name Validation
    function ValidateLName(l_name, min, max) {
        regx = /^[a-zA-Z ]*$/;

        // Function invoking for validating empty fields.
        if (!validateEmptyFields(l_name)) {
            // returning true as it is not mandotory field.
            return true;
        } else if (!validateMinMax(l_name, 8, 24)) {
            return false;
        } else if (regx.test(l_name.value)) {
            userDet['lastname'] = l_name.value;
            return true;
        } else {
            alert("User Last Name should be Alphabet");
        }
    };

    // User Date of Birth Validation
    function ValidateDOB(dob_obj) {
        // regular expression to match required date format
        re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

        // Function invoking for validating empty fields.
        if (!validateEmptyFields(dob_obj)) {
            return false;
        } else if (!dob_obj.value.match(re)) {
            alert("Invalid date format: " + dob_obj.value);
            // form.dob_obj.focus();
            return false;
        } else {
            userDet['dob'] = dob_obj.value;
            return true;
        }
    };

    // User Gender Validation
    function ValidateGender(gender) {

        // Function invoking for validating empty fields.
        if (!validateEmptyFields(gender)) {
            return false;
        } else if (gender) {
            userDet['gender'] = gender.value;
            return true;
        }
    };

    // User ID Validation
    function ValidateUserId(uid, min, max) {
        regx = /^[a-zA-Z0-9]*$/;

        // Function invoking for validating empty fields.
        if (!validateEmptyFields(uid)) {
            return false;
        } else if (!validateMinMax(uid, 8, 24)) {
            return false;
        } else if (regx.test(uid.value)) {
            userDet['userid'] = uid.value;
            return true;
        } else {
            alert("UserID should not have Spacial Charactors.");
        }
        return false;
    };

    // Password Validation
    function ValidatePSW(passid, min, max) {
        var pwd_spl_chrs = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
        var valid_psw = 0;

        // Function invoking for validating empty fields.
        if (!validateEmptyFields(passid)) {
            return false;
        } else if (!validateMinMax(passid, 8, 24)) {
            return false;
        } else if (pwd_spl_chrs.test(passid.value)) {
            userDet['password'] = passid.value;
            return true;
        } else {
            alert("Invalid Password. Password should be Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character");
            return false;
        }
    };

    // User Confirm Password Validation
    function ValidateConfPSW(password, confirmPassword) {
        // Function invoking for validating empty fields.
        if (!validateEmptyFields(confirmPassword)) {
            return false;
        } else if (password.value != confirmPassword.value) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    };


    // Country Validation
    function ValidateCountry(ucountry) {
        // Function invoking for validating empty fields.
        if (!validateEmptyFields(ucountry)) {
            return false;
        } else if (ucountry) {
            userDet['country'] = ucountry.value;
            return true;
        }
    };

    // State Validation
    function ValidateState(ustate) {
        // Function invoking for validating empty fields.
        if (!validateEmptyFields(ustate)) {
            return false;
        } else if (ustate) {
            userDet['state'] = ustate.value;
            return true;
        }
    };

    /**
     * Pass the value of a field and validate.
     * @param  {fieldObj} field The field to get the value of
     */
    var validateEmptyFields = function(fieldObj) {
        // This condition id for Radio/Checkboxes.
        if (fieldObj.length > 1) {
            if (fieldObj[0].type == 'radio') {
                for (var i = 0; i < fieldObj.length; i++) {
                    if (fieldObj[i].checked)
                        break;
                }
                if (i == fieldObj.length)
                    return alert("Please select Gender");
                return true;
            } else if (fieldObj.type == 'select-one') {
                for (var i = 0; i < fieldObj.length; i++) {
                    if (fieldObj.selectedIndex == 0)
                        return alert("Please select " + fieldObj.name);
                }
                if (i == fieldObj.length)
                    return true;
            } else if (fieldObj[0].type == 'checkbox') {
                for (var i = 0; i < fieldObj.length; i++) {
                    if (fieldObj[i].checked)
                        break;
                }
                if (i == fieldObj.length)
                    return alert("Please select " + fieldObj.name);
                return true;
            }
        } else if (!fieldObj.value) {
            alert("Please Enter " + fieldObj.name);
            return false;
        } else {
            return true;
        }
    };

    /**
     * Pass the value of a field and validate.
     * @param  {fieldObj} field The field to get the value of
     */
    var validateMinMax = function(fieldObj, min, max) {
        if (fieldObj.value.length < min || fieldObj.value.length > max) {
            alert(fieldObj.name + " length be between " + min + " to " + max);
        } else {
            return true;
        }
    };

    // LoginForm Validation
    function ValidateLogin(formObj) {
        var user_id = formObj['username'];
        var password = formObj['password'];

        // Function invoking for validating empty fields.
        if (!validateEmptyFields(user_id) || !validateEmptyFields(password)) {
            return false;
        }

        // getting the user details from the array
        getData = window.localStorage

        userIDMatch = getData.UserID;
        pswMatch = getData.Password;

        if (!userIDMatch && pswMatch) {
            alert("UserID or Password is not exists. Please register.");
        } else if ((userIDMatch == user_id.value) && (pswMatch == password.value)) {
            alert("user id and password matches the record which has registered.");
            get_details = window.location.search
            window.location = 'multiselect.html?userDetails=' + get_details;
        } else {
            alert("UserID or Password not valid.");
            return false;
        }
    };



    // Validating Multiple selection
    function multiSelectValidation(MultiSelect) {

        // Local Storage
        var storeData = window.localStorage;

        // Function invoking for validating empty fields.
        if (!validateEmptyFields(MultiSelect)) {
            return false;
        } else if (MultiSelect) {
            storeData['hobbies'] = MultiSelect.getElementsByTagName('input')[0].value;
            return true;
        }
        };

        function updateDetails(mbrObj) {
            // getting the user details from the array
            // getting the user details from the array
            getData = window.localStorage

            userFname = getData.FirstName;
            userLname = getData.LastName;
            userDOB = getData.DateOfBirth;
            userGender = getData.Gender;
            userID = getData.UserID;
            userCountry = getData.Country;
            userState = getData.State;
            hobby = getData.Games;

            //Update Data
            var myTable = document.getElementById('detTable');
            detTable.rows[0].cells[1].innerHTML = userFname;
            detTable.rows[0].cells[3].innerHTML = userLname;
            detTable.rows[0].cells[5].innerHTML = userDOB;
            detTable.rows[0].cells[7].innerHTML = userGender;

            detTable.rows[1].cells[1].innerHTML = userID;
            detTable.rows[1].cells[3].innerHTML = userCountry;
            detTable.rows[1].cells[5].innerHTML = userState;


            //Update data
            var myTable = document.getElementById('myTable');
            myTable.rows[1].cells[0].innerHTML = hobby;
            myTable.rows[2].cells[0].innerHTML = hobby;
        };