
//read input from submit event
document.addEventListener("DOMContentLoaded", function (event) 
{
        // disable the lower part of the form until we have user input for all values
    document.getElementById("mycustomersbox").disabled = true;
   
})


//function read input
function formSubmitEvent() 
{
    let name = document.getElementById("custname").value;
    let city = document.getElementById("city").value;
    let payment = document.getElementById("payment").value;
//read input into sting concatination
    let singlestring = name + " " + city + " " + payment;

    // we could do much better validation, but that's not the point of this example!
    if (name.length > 2 && city.length > 2) 
    {
        document.getElementById("mycustomersbox").disabled = false;
   
        inputstringarray.push(singlestring);
        makeList();
    }
    else 
    {
        alert("please fill in all fields");
    }
}


//put user input string into array 
let inputstringarray = [];

  //function to display input string array
function makeList()
{
    document.getElementById("list").innerHTML = "";
    
    let ul = document.createElement('ul');
    
    document.getElementById("list").appendChild(ul);
    for (let i = 0; i < inputstringarray.length; i++) 
    {
       // added transform CSS for the li element and the hover li
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = inputstringarray[i];
        
    }
}