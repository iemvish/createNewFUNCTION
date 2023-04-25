// let users = {
//     getFullName : function (){
//     return this.fname+" "+this.lname}
// }

// let student = {
//     fname : "Vishal",
//     lname : "Kumar",
//     getFullName : users.getFullName()
// }

// console.log(student)
let a = [1,2,3,4,5]
Array.prototype.greet = function (){
    return "this is array"
}
let users = {
        getFullName : function (){
            return this.name+" "+this.lastName
         },
         getAge : function(){
            let age = new Date().getFullYear()-this.birth
            return age
        }
    }
    
    let student = {
        name : 'shivani',
        lastName: 'sharma',
        birth : 2000,
        // getAge: users.getAge
      }
      
    //   let teacher = {
    //     name : 'vishal',
    //     lastName: 'kumar',
    //     birth : 1999,
    //   }
    
      student.__proto__ = users
    //   teacher.__proto__ = users
    
      console.log(student.getAge())
    //   console.log(student)