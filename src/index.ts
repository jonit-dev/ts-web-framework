import { User } from './models/User/User.model';


const user = new User({
  name: 'new record',
  age: 0
});


user.on('change', () => {

  console.log('User was changed!');

})

user.set({ name: 'hello' })