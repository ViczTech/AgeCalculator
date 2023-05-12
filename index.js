const BTN = document.getElementById("btn");
const Birthday = document.getElementById("date");
let Result  = document.getElementById("result")

function calcAge(){
  const BirthdayValue = Birthday.value ;

  if (BirthdayValue === ""){
    alert('Please enter your birthday')
  }else {
    const age = getAge(BirthdayValue);
    Result.innerText = `You are ${age} ${age > 1 ? 'years' : 'year'} old`;
  }

  
  function getAge(BirthdayValue) {
    const currentDate = new Date();
    const BirthdayDate = new Date(BirthdayValue)
    const age = currentDate.getFullYear() - BirthdayDate.getFullYear();
    return age
  }

}

BTN.addEventListener('click', calcAge)