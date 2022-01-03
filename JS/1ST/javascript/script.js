// alert number : button 1 alert  name :


button1.onclick = function () {
    var name=prompt("What's your Name : ")
    
    alert("Hello Mr " + name)
    document.getElementById("originalStatement").innerHTML = ("alert('"+name+"')")
}
//  alert number : button 2 with alert number
button2.onclick = function(){
    var number=prompt("Number: ")
    alert(number)
    document.getElementById("originalStatement").innerHTML = ( "alert('"+ number+"')"+"<br>")
}
// Show variable name : button 3 variable type in innerHTML (to show in web page)


button3.onclick = function () {
    var number = document.getElementById("number").value;
    number = Number(number)
    // document.getElementById("result").innerHTML = ( " " +number)
 console.log(number)
// button3.onclick = function () {
//     var name = document.getElementById("number").value;
//     // name = Name(name)
//    
}

 // Show variable name : button 4 camelCase type in innerHTML (to show in web page)
button4.onclick = function(){
    var cases=["user", "userResponce" , " userResponceTime" , " userResponceTimeLimit"]
    for (var index=0 ; index < cases.length ; index++ ){
    document.getElementById("originalStatement").innerHTML = ("camelCase Examples :")
            document.getElementById("result").innerHTML += ("<b> .</b> "+ cases[index]+"<br>")
}
}

 // Show sum of 2 numbers  : button 4 camelCase type in innerHTML (to show in web page)
  
 button5.onclick = function(){

    // var num3="<input>"

    // <input type="text" id="number">

    // var num=['4', '5']
    // for (var index=0 ; index < num.length ; index++ ){
    //     document.getElementById("originalStatement").innerHTML += ("let num ="+ num[index]+";"+"<br>")
                // document.getElementById("result").innerHTML += ("<b> .</b> "+ cases[index]+"<br>")
                // break;
    // }
    // }
   var num1=4;
    var num2=3;
    var sum=num1+num2;
    document.getElementById("originalStatement").innerHTML =( 
    "let num1 ="+ num1+";"+"<br>"+
    "let num2 ="+ num2+";"+"<br>"+
    "ln addition "+ "sum=num1+num2 "+";")
        document.getElementById("result").innerHTML = (sum)
        console.log(sum)
}

 // Show subtraction of 2 numbers  : button 4 camelCase type in innerHTML (to show in web page)
  
 button6.onclick = function(){

    var num1=4;
    var num2=3;
    var sol=sum=num1-num2;
    document.getElementById("originalStatement").innerHTML =( 
    "let num1 ="+ num1+";"+"<br>"+
    "let num2 ="+ num2+";"+"<br>"+
    "ln subtraction "+ "sub=num1-num2 "+";")
        document.getElementById("result").innerHTML = (sol)
        console.log(sol)
}

 // Show multiplication of 2 numbers  : button 4 camelCase type in innerHTML (to show in web page)
  
 button7.onclick = function(){

    var num1=4;
    var num2=3;
    var sol=sum=num1*num2;
    document.getElementById("originalStatement").innerHTML =( 
    "let num1 ="+ num1+";"+"<br>"+
    "let num2 ="+ num2+";"+"<br>"+
    "ln multiply "+ "sol=num1*num2 "+";")
        document.getElementById("result").innerHTML = (sol)
        console.log(sol)
}
 
 // Show subtraction of 2 numbers  : button 4 camelCase type in innerHTML (to show in web page)
  
 button8.onclick = function(){

    var num1=4;
    var num2=3;
    var sol=num1/num2;
    document.getElementById("originalStatement").innerHTML =( 
    "let num1 ="+ num1+";"+"<br>"+
    "let num2 ="+ num2+";"+"<br>"+
    "ln Division "+ "division=num1/num2 "+";")
        document.getElementById("result").innerHTML = (sol)
        console.log(sol)
}


 // Show multiplication of 2 numbers  : button 4 camelCase type in innerHTML (to show in web page)


 button9.onclick=function(){
    //  var a=prompt("enter data")
      var a=4**5-3+5 / 6;
     document.getElementById("originalStatement").innerHTML =("let some calculations : 4**5-3+5 / 6")
    //  console.log(4**5-3+5 / 6 ); 
     document.getElementById("result").innerHTML = (a)
     console.log(a)

    }

// var newCitites = cities.slice(2, 5)
// console.log("newCities =>", newCitites)
// alert("Welcome to " + cities[4])
// console.log(cities.length)

// for (var index = 0; index < cities.length; index++) { }
// var cities = ["Islamabad", "Karachi", "Lahore", "Faisalabad", "Sheikhupura"];
// var cleanestCity = "Faisalabad";

    // var cityFound = false;
    // for (var index = 0; index < cities.length; index++) {
    //     // alert(cities[index])
    //     if (cleanestCity === cities[index]) {
    //         cityFound = true
    //         result.innerHTML += "I love this city: " + cities[index] + "<br>";
    //         break;
    //     }
    // }
    // if (cityFound === false) {
    //     alert("City not found")
    // }

// result.innerHTML += "I love: " + cities[index] + "<br>";

// }

// if (cleanestCity == cities[0]) {
//     alert("Correct")
// } else if (cleanestCity == cities[1]) {
//     alert("Correct")
// }else if (cleanestCity == cities[2]) {
//     alert("Correct")
// }
// else if (cleanestCity == cities[3]) {
//     alert("Correct")
// }
// else if (cleanestCity == cities[4]) {
//     alert("Correct")
// }


// cities[3] = "Faisalabad"

// cities[10] = "city name"

// console.log(cities[6])


// cities.pop()
// cities.shift()
// cities.push("Faisalabad", "ISB");
// cities.unshift("Faisalabad", "ISB");

cities.splice(2, 1)
console.log("cities =>", cities)


















// var cities = ["Islamabad", "Karachi", "Lahore", "Peshawar", "Queta"];

// var index = 1;

// console.log(cities)
// console.log(cities[index])


// for( var index = 0; index < 5; index++ ){

//     console.log( "I love: " + cities[ index ] )

// }

// //-----------------------------------------

// button1.onclick = function () {

//     alert();

// }



var cities = ["Islamabad", "Karachi", "Lahore", "Peshawar", "Queta"];

// cities[5] = "Faisalabad";
// pop() remove the last element of an array.
// push() Using the keyword, push, you can add one or more elements to the end of an array.
// cities.push("Faisalabad", "Sheikhupura")
// shift() method removes an element from the beginning of an array.
// unshift() To add one or more elements to the beginning of an array, use the unshift method.


// cities.push("Faisalabad")

// console.log(cities);

// var pets = ["dog", "cat", "fly", "bug", "ox"]

// pets.splice(2, 2, "snake", "cow", "lion")
// var newPets = pets.slice(2, 4);

// console.log(pets);
// console.log(newPets);

















button2.onclick = function () {

    var name = prompt("what is your name?");

    alert(name);

}

// button3.onclick = function () {

//     var city = prompt("Enter your city?");

//     cities.push(city)

//     alert(city + " has been added into cities array.")

// }

// button4.onclick = function () {

//     result.innerHTML = "";

//     for (var index = 0; index < cities.length; index++) {

//         result.innerHTML += "I love: " + cities[index] + "<br>";

//     }

// }

button5.onclick = function () {

    var number = +prompt("Enter a number");

    for (var index = 1; index <= 10; index++) {

        // console.log(number + " * " + index + " = " + number * index)
        result.innerHTML += number + " * " + index + " = " + number * index + "<br>";

    }
    // result.innerHTML += "<hr>"

}


//-----------------------------------------


//------------------------------------------


// var names = ["Umar","Irfan","Naveed", "Shahzad"];
// var castes = ["Shehikh", "Jutt", "Malik"];

// for( var i = 0; i < names.length; i++ ){

//     for(var j = 0; j < castes.length; j++ ){

//         console.log( names[i] + ' ' + castes[j ] )

//     }

// }