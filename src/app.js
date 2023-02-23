/*
* File: ButtonPanel.java
* Author: Gerecs Diána
* Copyright: 2023, Gerecs Diána
* Group: Szoft I-2-E
* Date: 20230-02-23
* Github: https://github.com/Gerecs Diána/
* Licenc: GNU GPL
*/
const emptbody = document.querySelector('#emptbody');

var empList = [
    { id: 1, name:"Per Lajos", city: 'Szeged', salary: 415 },
    { id: 2, name:"Para Béla", city: 'Szeged', salary: 345 },
    { id: 3, name:"Erős Imre", city: 'Szeged', salary: 325 },
    { id: 4, name:"Tér Emese", city: 'Szeged', salary: 385 },
    { id: 5, name:"Bot Erzsike", city: 'Szeged', salary: 375 },
    { id: 6, name:"Ken Irén", city: 'Szeged', salary: 395 }

];
//createTable();
(function createTable() {
empList.forEach((emp) => {
    console.log(emp.name)
    let tr = document.createElement('tr');     //tr elem gyártása

    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdCity = document.createElement('td');
    let tdSalary = document.createElement('td');

    //Adunk neki tartalmat:
    tdId.textContent = emp.id;
    tdName.textContent = emp.name;
    tdCity.textContent = emp.city;
    tdSalary.textContent = emp.salary;

    //hozzá kell adni a tbodyt a tr és td elemekhez
    emptbody.append(tr);
    tr.append(tdId);
    tr.append(tdName);
    tr.append(tdCity);
    tr.append(tdSalary);
    


    
});
})();

