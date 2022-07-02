import{ v4 as uuidv4 } from 'uuid';


let users = [];

export const getUsers = (req, res)=>{
    res.send(users);
}

export const createUser= (req, res)=>{
    const user = req.body;

    users.push({... user, id: uuidv4()});
    
    res.send(`new user with name ${user.firstName} being pushed`);
}

export const getUser = (req, res)=>{
    
    const { id } = req.params; //taking value of id from req.params

    const foundUsers = users.find((user)=>user.id==id); //compare ids

    res.send(foundUsers);
}

export const deleteUser = (req, res)=>{
    const { id } = req.params; //taking value of id from req.params
    
    users = users.filter((user)=>user.id != id); 
    // this filter param keeps only true statements so in order to delete we have to return false
    //in order to make false I used not equel to  operator 
    res.send(`User with id:${id} has been successfully removed`);

}
 
export const updateUser = (req, res) => {
    const { id } = req.params;
    
    const { firstName, lastName, age } = req.body;

    const user = users.find((user)=> user.id == id);

    if(firstName) user.firstName = firstName;
    
    if(lastName) user.lastName = lastName;
    
    if(age) user.age = age;
    
    res.send(`User with the id ${id} has been changed`);
}