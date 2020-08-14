function formValidation() {
    var surname = document.coronavirusRegister.surname;
    var given_name = document.coronavirusRegister.given_name;
    var DOB = document.coronavirusRegister.dob;
    var residence = document.coronavirusRegister.residence;
    var occupation = document.coronavirusRegister.occupation;
    var nationaliTy = document.coronavirusRegister.nationality;
    var gender = document.coronavirusRegister.gender;
    var category = document.coronavirusRegister.category;

    event.preventDefault()

    if (names(surname)) {}
    if (names(given_name)) {}

    if (residents(residence)) {}
    if (occupations(occupation)) {}
    if (nation(nationaliTy)) {}
    if (genders(gender)) {}
    if (categories(category)) {}








    return false;

}
var names = (surname) => {
        var letters = /^[A-Za-z]+$/;
        if (surname.value.match(letters) && surname.value.length < 16 && surname.value.length > 1) {
            return true;
        } else {

            surname.style.border = "2px solid red"
                //getting document by Id
            document.getElementById('error1').style.display = "block"
            surname.addEventListener("click", () => { surname.style.border = "" })
            return false;
        }
    }
    // validating name
var names = (give_name) => {
    var letters = /^[A-Za-z]+$/;
    if (give_name.value.match(letters) && give_name.value.length < 16 && give_name.value.length > 1) {
        return true;
    } else {

        give_name.style.border = "2px solid red"
            //getting document by Id 
        document.getElementById('error2').style.display = "block"
        give_name.addEventListener("click", () => { surname.style.border = "" })
        return false;
    }
}
var residents = (residence) => {
    var letters = /^[A-Za-z]+$/;
    if (residence.value.match(letters) && residence.value.length < 20 && residence.value.length > 1) {

        return true;
    } else {

        residence.style.border = "2px solid red"
            //getting document by Id
        document.getElementById('error4').style.display = "block"
        residence.addEventListener("click", () => { residence.style.border = "" })
        return false;
    }
}


var occupations = (occupation) => {
        var letters = /^[A-Za-z]+$/;
        if (occupation.value.match(letters) && occupation.value.length < 50 && occupation.value.length > 5) {

            return true;
        } else {

            occupation.style.border = "2px solid red"
                //document.getElementById('error').style.display = "none"
            document.getElementById('error5').style.display = "block"
            occupation.addEventListener("click", () => { occupation.style.border = "" })
            return false;
        }
    }
    // validate nationality
var nation = (nationality) => {
    var letters = /^[A-Za-z]+$/;
    if (nationality.value.match(letters) && nationality.value.length < 20 && nationality.value.length > 5) {

        return true;
    } else {

        nationality.style.border = "2px solid red"
            //document.getElementById('error').style.display = "none"
        document.getElementById('error6').style.display = "block"
        nationality.addEventListener("click", () => { nationality.style.border = "" })
        return false;
    }
}

var categories = (category) => {

    if (!category.value == "default") {

        return true;
    } else {

        category.style.border = "2px solid red"
            //document.getElementById('error').style.display = "none"
        document.getElementById('error7').style.display = "block"
        category.addEventListener("click", () => { category.style.border = "" })
        return false;
    }
}