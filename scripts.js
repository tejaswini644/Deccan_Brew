function validate() {
    const username = document.contact.username.value
    const mobile = document.contact.mobile.value
    const email = document.contact.email.value
    const mobileLength = Number(document.contact.countryCode.value)

    const nameError = document.getElementById('nameError')
    const mobileError = document.getElementById('mobileError')
    const emailError = document.getElementById('emailError')
    let nameStatus = false;
    let mobileStatus = false;
    let emailStatus = false;

    //Regular Expression
    const alphaExp = /^[a-zA-Z]+$/;
    const numberExp = /^[0-9]+$/;
    const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //Email Validation
    if (email === '') {
        emailError.textContent = 'Email Address is Required!.'
    }
    else {
        if (email.match(emailExp)) {
            emailError.textContent = ``;
            emailStatus = true;

        }
        else {
            emailError.textContent = `Invalid Email Address`;
        }

    }

    //name condition
    if (username === '') {
        nameError.textContent = 'Name is required!.'
    }
    else {
        if (username.match(alphaExp)) {
            nameError.textContent = '';
            nameStatus = true;
        }
        else {
            nameError.textContent = 'Name must contains only alphabetics'
        }

    }

    // mobile condition
    if (mobile === '') {
        mobileError.textContent = 'Mobile number is required!.'
    }
    else {
        if (mobile.match(numberExp)) {
            if (mobile.length === 10) {
                mobileError.textContent = '';
                mobileStatus = true;
            }
            else {
                mobileError.textContent = `Mobile Numbers should be contains ${mobileLength} Digits !`;
            }
        } else {
            mobileError.textContent = 'Mobile Number should be contains Digits  only'
        }
    }

    //Return Condition 
    if (nameStatus && mobileStatus && emailStatus) {
        return true;

    }
    else {
        return false;
    }

}