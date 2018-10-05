const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((res) => {
  console.log(res);
});

Todo.findOneAndRemove({_id: ''}).then((todo)=> {
  console.log(todo);
});

Todo.findByIdAndRemove(asdf).then((doc) => {
  console.log(doc);
});
