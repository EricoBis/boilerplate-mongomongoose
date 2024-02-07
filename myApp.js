require("dotenv").config();

// MONGOOSE SETUP
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//SCHEMA
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

// let Person;
const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const newPerson = new Person({
    name: "Érico",
    age: 22,
    favoriteFoods: ["Guacamole", "Pizza", "Strogonoff"],
  });
  newPerson.save(function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const arrayOfPeople = [
  {name: "Person 1", age: 52, favoriteFoods: ["Hamburger"]},
  {name: "Person 2", age: 32, favoriteFoods: ["Barbecue"]},
  {name: "Person 3", age: 25, favoriteFoods: ["Hotdog"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data){
    if (err) return console.log(err);
    done(null, data);
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, data){
    if(err) return console.log(err);
    done(null, data);
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function(err, data){
    if(err) return console.log(err);
    done(null, data);
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function(err, data){
    if(err) return console.log(err);
    done(null, data);
  })
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
