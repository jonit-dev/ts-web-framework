import { User } from './models/User/User.model';


const user = new User({
  name: 'new record',
  age: 0
});


// user.set({
//   name: "Martin"
// })

// console.log(user.get("name"));

// user.on('click', () => console.log('hello'))
// user.on('click', () => console.log('world'))

// user.trigger('click') 

(async () => {
  await user.save();

  await user.fetch()
  console.log(user);
})()

