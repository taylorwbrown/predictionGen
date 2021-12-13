// Creating the arrays for the three sentence sections. Held within an object.
const randoArrays = {

    name: ['Steve', 'Rackus', 'Bean', 'Boinkus', 'Cheese', 'Carlton'],
  
    feeling: [' is upset.', ' wants beans.', ' despises you.', ' wants bread.', ' loves you.', ' takes pity.'],
  
    statement: [' Will require attention.', ' Give beans.', ' Give cheese.', ' Take them to dinner.', ' Bing Bong.', ' Run!', ' Love them forever.'],

    // sets up randomized index numbers to be called on later.
    randomName() {
      let newName = this.name[Math.floor(Math.random() * this.name.length)];
      return newName;
    },

    randomFeeling() {
      let newFeeling = this.feeling[Math.floor(Math.random() * this.feeling.length)];
      return newFeeling;
    },

    randomStatement() {
      let newStatement = this.statement[Math.floor(Math.random() * this.statement.length)];
      return newStatement;
    },

    // Puts the three randomizations together.
    makeSentence() {
      console.log(this.randomName() + this.randomFeeling() + this.randomStatement());
    }

  };

randoArrays.makeSentence();
