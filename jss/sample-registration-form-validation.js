    var userHobby = new Object();
    var just = new Object();

    // Onload Function
    // Loading the value and description of country in an array
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


    // creating the hiddent fields
    function showRegForm() {
        loging_div = document.getElementById('logInPanel');
        reg_div = document.getElementById('uname');

        if (loging_div.style.display == 'none') {
            reg_div.style.display = 'none';
            loging_div.style.display = 'block';
        } else {
            loging_div.style.display = 'none';
            reg_div.style.display = 'block';
        }
    };


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

        var userDet = new Object(); // or the shorthand way --> var userDet = {};

        // Method are being called from each condition to validate the fields
        if (ValidateFName(Fname) && ValidateLName(Lname) && ValidateDOB(dob) && ValidateGender(gender) &&
            ValidateUserId(uid) && ValidatePSW(passid) && ValidateConfPSW(passid, conf_psw) &&
            ValidateCountry(ucountry) && ValidateState(ustate)) {

            userDet['userid'] = uid.value;
            userDet['firstname'] = Fname.value;
            userDet['lastname'] = Lname.value;
            userDet['dob'] = dob.value;
            userDet['gender'] = gender.value;
            userDet['password'] = passid.value;
            userDet['country'] = ucountry.value;
            userDet['state'] = ustate.value;

            just[uid.value] = userDet

            showRegForm();
        } else {
            return false;
        }
    };

    // User First Name Validation
    function ValidateFName(f_name) {
        regx = /^[a-zA-Z ]*$/;

        // Function invoking for validating empty fields.
        if (!validateEmptyFields(f_name)) {
            return false;
        } else if (!validateMinMax(f_name, 8, 24)) {
            return false;
        } else if (regx.test(f_name.value)) {
            // userDet.push(f_name.name = f_name.value);
            // userDet['firstname'] = f_name.value;
            return true;
        } else {
            alert("User First Name should be Alphabet");
        }
    };

    // User Last Name Validation
    function ValidateLName(l_name) {
        regx = /^[a-zA-Z ]*$/;

        // Function invoking for validating lenght.
        if (l_name.value) {
            if (!validateMinMax(l_name, 8, 24)) {
                return false;
            } else if (regx.test(l_name.value)) {
                // userDet['lastname'] = l_name.value;
                return true;
            } else {
                alert("User Last Name should be Alphabet");
                return false;
            }
        }
        return true;
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
            // userDet['dob'] = dob_obj.value;
            return true;
        }
    };

    // User Gender Validation
    function ValidateGender(gender) {

        // Function invoking for validating empty fields.
        if (!validateEmptyFields(gender)) {
            return false;
        } else if (gender) {
            // userDet['gender'] = gender.value;
            return true;
        }
    };

    // User ID Validation
    function ValidateUserId(uid) {
        regx = /^[a-zA-Z0-9]*$/;

        // Function invoking for validating empty fields.
        if (!validateEmptyFields(uid)) {
            return false;
        } else if (!validateMinMax(uid, 8, 24)) {
            return false;
        } else if (regx.test(uid.value)) {
            if (just[uid.value])
            {
                alert("User id already Exist.");
                return false;
            }
            return true;
        } else {
            alert("UserID should not have Spacial Charactors.");
        }
        return false;
    };

    // Password Validation
    function ValidatePSW(passid) {
        var pwd_spl_chrs = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
        var valid_psw = 0;

        // Function invoking for validating empty fields.
        if (!validateEmptyFields(passid)) {
            return false;
        } else if (!validateMinMax(passid, 8, 24)) {
            return false;
        } else if (pwd_spl_chrs.test(passid.value)) {
            // userDet['password'] = passid.value;
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
            // userDet['country'] = ucountry.value;
            return true;
        }
    };

    // State Validation
    function ValidateState(ustate) {
        // Function invoking for validating empty fields.
        if (!validateEmptyFields(ustate)) {
            return false;
        } else if (ustate) {
            // userDet['state'] = ustate.value;
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
                    return alert("Please select " + fieldObj[0].name);
                return true;
            } else if (fieldObj.type == 'select-one') {
                for (var i = 0; i < fieldObj.length; i++) {
                    if (fieldObj.selectedIndex == 0)
                        return alert("Please select " + fieldObj.name);
                }
                if (i == fieldObj.length)
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

            //check if there are Registered datas.
            var userIDMatch = null;
            var pswMatch = null;

            if (!userIDMatch && pswMatch) {
                alert("UserID or Password is not exists. Please register.");
            } else if ((just[user_id.value]) && (just[user_id.value]['password'] == password.value)) {
                alert("Your are successfully logged in.");

                loging_div = document.getElementById('logInPanel');
                sel_div = document.getElementById('multiSelect');

                loging_div.style.display = 'none';
                sel_div.style.display = 'block';

                return true;
            } else {
                alert("UserID or Password not valid.");
                return false;
            }
        // } else {
        //     alert("Seems like " + user_id.value + " is not registered. Please register and Login.");
        //     return false;
    };



    // Validating Multiple selection
    function multiSelectValidation(MultiSelect) {

        var selHobbies = MultiSelect['hobbies'];
        if (!validateEmptyHobSpot(selHobbies)) {
            return false;
        }

        // Validating favourite spot
        var selFavSpot = MultiSelect['favspot'];
        if (!validateEmptyHobSpot(selFavSpot)) {
            return false;
        }

        // Validating Mother tongue
        var selTongue = MultiSelect['language'];
        // Function invoking for validating empty fields.
        if (!validateEmptyFields(selTongue)) {
            return false;
        } else if (selTongue) {
            userHobby['tongue'] = selTongue.value;
        }

        //TextArea validation
        var TextArea = MultiSelect['aboutUser'];
        if (TextArea.value) {
            userHobby[TextArea.name] = TextArea.value;
        }
        sel_div = document.getElementById('multiSelect');
        det = document.getElementById('mbrDet');

        sel_div.style.display = 'none';
        det.style.display = 'block';
        return true;
    };


    function validateEmptyHobSpot(selectObj) {
        // array that will store the value of selected checkboxes
        var checkedValue = [];

        //defining the counter variable for counting checked
        var counter = 0;

        for (var i = 0; i < selectObj.length; i++) {
            if (selectObj[i].checked) {
                counter += 1;
                checkedValue.push(selectObj[i].value);
            }
            if (i == selectObj.length)
                return true;
        }
        if (!counter) {
            return alert("Please select your " + selectObj[0].name);
        }
        return true;
    };

    function updateDetails(mbrObj) {

        userFname = userDet.firstname;
        userLname = userDet.lastname;
        userDOB = userDet.dob;
        userGender = userDet.gender;
        userID = userDet.userid;
        userCountry = userDet.country;
        userState = userDet.state;


        //fetching the hobbies
        game = userHobbies.game;
        swim = userHobbies.swim;
        walk = userHobbies.walk;
        sing = userHobbies.sing;
        paint = userHobbies.paint;
        dance = userHobbies.dance;
        read = userHobbies.read;
        teach = userHobbies.teach;
        sleep = userHobbies.sleep;
        aboutText = userHobbies.aboutUser;

        //Update user details into the fiels.
        mbrObj.fname.value = userFname;
        mbrObj.lname.value = userLname;
        mbrObj.dob.value = userDOB;
        mbrObj.gender.value = userGender;
        mbrObj.userid.value = userID;
        mbrObj.country.value = userCountry;
        mbrObj.state.value = userState;


        //Update user hobbies into the fields
        var myTable = document.getElementById('myTable');
        myTable.rows[0].cells[0].innerHTML = game;
        myTable.rows[0].cells[1].innerHTML = swim;
        myTable.rows[0].cells[2].innerHTML = walk;
        myTable.rows[1].cells[0].innerHTML = sing;
        myTable.rows[1].cells[1].innerHTML = paint;
        myTable.rows[1].cells[2].innerHTML = dance;
        myTable.rows[2].cells[0].innerHTML = read;
        myTable.rows[2].cells[1].innerHTML = teach;
        myTable.rows[2].cells[2].innerHTML = sleep;

        //Update about user into the textarea.
        mbrObj.getElementsByTagName('textarea').aboutI.value = aboutText;
    };