console.log("this is registration page ");

const registrationform = document.getElementById("registration-form");

const userInfoA = localStorage.getItem("userInfo");
if (userInfoA) {
    goTo("home.html");

}


console.log(registrationform);

function getSelected(select) {
    let selectedValues =[];
    for(optionIndex in select.options){
        if(select.options[optionIndex].selected) {
            selectedValues.push(select.options[optionIndex].value);

        }
    }
    return selectedValues
}
registrationform.onsubmit = function (event) {
    event.preventDefault();
    console.log("I am triggered when submit is pressed");
    let name = document.getElementById("name").value;
    let interests = getSelected(document.getElementById("intrests"));
    let dob = document.getElementById("dob").value;
    let darkmode = document.getElementById("darkmode").checkeds;
    const data ={
      name: name,
      interests: interests,
      dob: dob,
      darkmode: darkmode,
    };
    console.log(data);
    localStorage.setItem("userInfo",JSON.stringify(data));
    goTo("home.html");
}