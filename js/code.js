// strings
let firstName = prompt("First-name: ");
let surname = prompt("Surname: ");
// numbers
let salary = prompt("Salary: ");
let salary1 = parseInt(salary) //converts string to integer
let bonus = 500;

// calculating converted salary value and added bonus
let finalSalary = salary1+bonus

// display content
document.write(firstName);
document.write("<br>" + surname);
document.write("<br>" + "R" + finalSalary);