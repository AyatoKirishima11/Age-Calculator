const userName = document.getElementById('userName');
const yearOfBirth = document.getElementById('yearOfBirth');
const checkBtn = document.getElementById('checkBtn');
const outputMsg = document.getElementById('outputMsg')
let currentYear = 2025;

checkBtn.addEventListener('click', function(){
    if(userName.value === "" || yearOfBirth.value === ""){
    alert("Fill in the required fields.")
    }
    else{
        let fetchedName = userName.value;
        if(yearOfBirth.value > currentYear){
            alert("Time Traveller");
            }
        else if(currentYear = yearOfBirth.value){
            alert("WTH baby using computer?");
            }
        else{
            let userAge = currentYear - yearOfBirth.value;
            outputMsg.innerText = "Hi" + " " + userName.value + ", You are" + " " + userAge + " " + "years old."
            }
        }
    });
