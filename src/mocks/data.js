const uuidv4 = require('uuid/v4');
let todos = [
  {
    id: uuidv4(), 
    task: 'get some money', 
    level: "high"
  }, 
  {
    id: uuidv4(), 
    task: 'buy some food', 
    level: "low"},
  {
    id: uuidv4(), 
    task: 'playing games', 
    level: "medium"
  },
  {
    id: uuidv4(), 
    task: 'buy some drink',
    level: "high"
  },
  {
    id: uuidv4(), 
    task: 'buy some drink', 
    level: "high"
  },
]

export default todos;
