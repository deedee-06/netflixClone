// function vote() {
//     let age = Number(document.getElementById("age").value);
//     // let votable= (age< 18)? "Not Eligible to vote": "Eligible to Vote";
//     if (isNaN(age)) {
//         votable = "input must be a number";
//     }
//     else if (age == 0) {
//         votable = "Kindly input your age";
//     } else {
//         votable = (age < 18) ? "Too young" : "Old Enough"
//     }
//     document.getElementById("response").innerHTML = votable;
// }



function confirm() {
    let carYear = Number(document.getElementById("year").value);
    let carAge;
    let carName = document.getElementById("brand").value;
    let carBrand;
    let currentYear = new Date().getFullYear();
    if (isNaN(carYear)) {
        carAge = "manufacture date must be a number";
    }else if(carName==0){
        carAge="input car brand"
    } else {
        carAge = "Your" + " " + carName + " " + "is" + " " + (currentYear - carYear) + " " + "years" + " " + "old"
    }
    document.getElementById("display").innerHTML = carAge;
}