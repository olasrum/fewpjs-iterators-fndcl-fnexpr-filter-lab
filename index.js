// Code your solution here
let people = ['Sven', 'Glen', 'Susy', 'Gladys']

function findMatching(drivers, string) {
    return drivers.filter(function(s) {
        return s.toLowerCase().includes(string.toLowerCase());
    })
}

console.log(findMatching(people, 'en'))

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(s) { 
        return s.startsWith(string);
    })
}

console.log(findMatching(people, 'S'))

function matchName(drivers, string) {
    return drivers.filter(function(s) {
        return s.name === string;
    })
}