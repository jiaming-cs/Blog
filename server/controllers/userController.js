import User from "../models/user.js"

// status code reference:

// 404	Not Found
// 200	OK
// 201	Created
// 403	Forbidden

//for authenticating users
const authUser = (req, res) => {
    const body = req.body;
    console.log('body', body);
    
    try {
        //find user based on username and password
        User.findOne({username: body.username, password: body.password}, (error, user)=>{
            //if error, give error message
            if (error){
                console.log(error.message);
                res.status(409).json({success: false, message: error.message, payload: {}});
            }else{
                // console.log(user);
                //if found, return payload
                if (user){
                    user.password = '';
                    console.log(user)
                    res.status(200).json({success: true, message: 'success', payload: user})
                }
                //else, message of invalid credentials
                else{
                    res.status(200).json({success: false, message: 'invalid user name or password', payload: {}})
                }
                
            }
        });
    //catch error
    } catch(error){
        console.log(`error: ${error.message}`)
        res.status(409).json({success: false, message: error.message, payload: {}})
    }
}

// //get list of users
// const getUserList = (req, res) => {

//     console.log('query: ', req.query)
//     let query = req.query
//     query.role = {'$ne':'admin'}

//     //query state
//     if (query.state){
//         let state = query.state;
//         delete query.state;
//         query['address.state'] = state;
//     }
    
//     //query city
//     if (query.city){
//         let city = query.city;
//         delete query.city;
//         query['address.city'] = city;
//     }

//     //query maximum or minimum age
//     if (query.ageMax || query.ageMin){

//         let ageRange = {};
//         //if querying maximum age
//         if (query.ageMax){
//             let minDate = new Date();
//             minDate.setFullYear( minDate.getFullYear() - query.ageMax);
//             ageRange['$gte'] = minDate;
//         }

//         //if querying minimum age
//         if (query.ageMin){
//             let maxDate = new Date();
//             maxDate.setFullYear( maxDate.getFullYear() - query.ageMin);
//             ageRange['$lte'] = maxDate;
//         }
        
//         delete query.ageMax;
//         delete query.ageMin;

//         query.dateOfBirth = ageRange;
//     }

//     //query id
//     if (query.id){
//         let ids = query.id;

//         delete query.id;

//         query._id = {}
//         query._id['$in'] = ids;
//     }
    
//     console.log('After change: ', query)

//     //try to find user based on query
//     try{
//         User.find(query, (error, users)=>{
//             //if error, give error message
//             if (error){
//                 console.log(error.message);
//                 res.status(409).json({success: false, message: error.message, payload: {}});
//             //else return payload
//             }else{
//                 // console.log(users);
//                 res.status(200).json({success: true, message: 'success', payload: users})
//             }
//         });
//     //catch error, give error message
//     } catch(error){
//         console.log(`error: ${error.message}`)
//         res.status(409).json({success: false, message: error.message, payload: {}})
//     }
    

// }

// //add a new user
// const addUser = (req, res) => {
//     const newUser = req.body;
//     try {
//         // check if user already exists with an email address

//         //find a specific user based on email address
//         User.findOne({email: newUser.email}, (error, userRetrived)=>{
//             //if error, give error message
//             if (error){
//                 console.log('find user: ', error.message);
//                 res.status(409).json({success: false, message: error.message, payload: {}});
//             }else{
//                 //if existing user is already found
//                 if (userRetrived){
//                     // user already exists
//                     res.status(403).json({success: false, message: `user with eamil ${userRetrived.email} already exist.`, payload: {}})
//                 }
//                 else{
//                     // else, we create a new user
//                     User.create(newUser, (error, userCreated)=>{
//                         //if error, give error message
//                         if (error){
//                             console.log('create user: ', error.message);
//                             res.status(409).json({success: false, message: error.message, payload: {}});
//                         //else return payload
//                         }else{
                            
//                             res.status(201).json({success: true, message: 'user created.', payload: userCreated})
//                         }
//                     });
//                 }
                
//             }
//         });
//     //catch error, give error message
//     } catch(error){
//         console.log(`error: ${error.message}`)
//         res.status(409).json({success: false, message: error.message, payload: {}})
//     }
// }

// //update an already existing user
// const updateUser = (req, res) => {
//     const userId = req.params.id;
//     // the id of user to be updated
//     //if previous user ID not found
//     if (userId==null){
//         res.status(404).json({success: false, message: 'invalide request.', payload: {}});
//         return;
//     }

//     const update = req.body;

//     //find user with existing ID and update
//     try {
//         User.findByIdAndUpdate(userId, update, (error, user) => {
//             //if error, give error message
//             if (error) {
//                 res.status(403).json({success: false, message: error.message, payload: {}})
//             }
//             //else return payload
//             else{
//                 res.status(200).json({success: true, message: 'success.', payload: {}});
//             }
//         })
//     //catch error, give error message
//     } catch(error){
//         console.log(`error: ${error.message}`)
//         res.status(409).json({success: false, message: error.message, payload: {}})
//     }
// }

// //delete user
// const deleteUser = (req, res) => {
//     const userId = req.params.id;
//     console.log(userId);
//     // the id of user to be updated
//     //if previous user ID not found
//     if (userId == null){
//         res.status(404).json({success: false, message: 'invalide request.', payload: {}});
//         return;
//     }

//     //find user with existing ID and delete
//     try {
//         User.findByIdAndDelete(userId, (error, user) => {
//             //if error, give error message
//             if (error) {
//                 console.log(error)
//                 res.status(403).json({success: false, message: error.message, payload: {}})
//             }
//             //else return payload
//             else{
//                 res.status(200).json({success: true, message: 'success.', payload: {}});
//             }
//         })
//     //catch error, give error message
//     } catch(error){
//         console.log(`error: ${error.message}`)
//         res.status(409).json({success: false, message: error.message, payload: {}})
//     }
// }

// //get a specific user
// const getUser = (req, res) => {
//     const userId = req.params.id;
//     console.log(userId);
//     // the id of user to be updated
//     //if user ID not found
//     if (userId == null){
//         res.status(404).json({success: false, message: 'invalid request.', payload: {}});
//         return;
//     }

//     //get user with existing ID
//     try {  
//         User.findById(userId, (error, user) => {
//             //if error, give error message
//             if (error) {     
//                 res.status(403).json({success: false, message: error.message, payload: {}})
//             }
//             //else return payload
//             else{
//                 res.status(200).json({success: true, message: 'success.', payload: user});
//             }
//         })
//     //catch error, give error message
//     } catch(error){
//         console.log(`error: ${error.message}`)
//         res.status(409).json({success: false, message: error.message, payload: {}})
//     }
// }





// export {authUser, getUserList, addUser, updateUser, deleteUser, getUser};
export {authUser};