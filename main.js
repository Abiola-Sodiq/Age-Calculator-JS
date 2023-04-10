let today = new Date();
let dobInput = document.getElementById("dob");
let outputAge = '';
const ageDisplay = document.getElementById("age");

dobInput.addEventListener("change", function() {
    let dateOfBirth = dobInput.value;
    let dob =dateOfBirth.split("-");
    let year = dob.filter((item)=>{return item.length >=4
    });
    console.log(year);
    let age = today.getFullYear() - year;
    outputAge = age
});

function showAge() {
    ageDisplay.innerHTML = "You are" + " " + outputAge +" " + "years old"
    
    if (outputAge >=25) { alert ("Oops!! You are not Eligible for this Offer...")
        
    } else {
        alert ( "Hurray!!! You Qualify for this Offer")
    }
}