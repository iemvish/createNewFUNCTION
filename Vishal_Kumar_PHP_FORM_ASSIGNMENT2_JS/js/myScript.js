function register(){
    let data = addToLocalStorage();
    let tableData = getDataInTable(data)
  }
    function addToLocalStorage(){
       let formInput = {
       id : 1,
       firstName : document.getElementById("fname").value,
       lastname : document.getElementById("lname").value,
       gender : document.getElementsByClassName("gender").value,
       age : document.getElementById("age").value,
       phone : document.getElementById("inputContact").value,
       adDate : document.getElementById("date").value,
       tech : document.getElementById("tech").value,
    }
    const students = JSON.parse(localStorage.getItem("KEY")) || [];
    students.push(formInput) || students.push(formInput.id)

    localStorage.setItem("KEY", JSON.stringify(students));
    }


    function getDataInTable(data){
        console.log(data[index])
       
   

    }



