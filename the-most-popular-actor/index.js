// Find the most popular actor from an array
// Input: an array of object, where each element contains the property "popularityScore"
// Output: A string that represents the name of the most popular actor

function mostPopularActor(actors) {
    let highestScore = actors[0].popularityScore;
    for(let i = 0; i < actors.length; i++) {
      if(actors[i].popularityScore > highestScore) {
        highestScore = actors[i].popularityScore;
      }
    }
    let mostPopularActor = actors.filter(actor => actor.popularityScore === highestScore)
    return mostPopularActor[0].name;
  }
  
  var americanActors = [
    { name: "Tom Hanks", popularityScore: 87 },
    { name: "Natalie Portman", popularityScore: 90 },
    { name: "Jack Nicholson", popularityScore: 98 },
    { name: "Julia Roberts", popularityScore: 88 },
  ];
  
  mostPopularActor(americanActors); // => "Jack Nicholson"