import { User } from './models/User/User.model';


const user = new User({
  id: 1
});

user.set({ name: "NEW NAME", age: 20 });


// user.set({
//   name: "Martin"
// })

// console.log(user.get("name"));

// user.on('click', () => console.log('hello'))
// user.on('click', () => console.log('world'))

// user.trigger('click') 


(async () => {
  await user.fetch()

  console.log(user);
})()

