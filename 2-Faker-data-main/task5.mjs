import { faker } from '@faker-js/faker';
import fs from 'fs'

function generateUsers() {

  let users = []

  for (let id=1; id <= 100; id++) {
    //write your code below
    //to assign person data into following variables
    let firstName;
    let lastName;
    let email; 

    users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email
    });
  }

  return { "data": users }
}
//Write your code below to call generateUsers()
//using below variable
let dataObj; 

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));
