const courses = ['Pain', 'Lait', 'oufs', 'Tomates'];
const total = document.getElementById("total")
const liste = document.getElementById("liste")

console.log(courses[3])
console.log(courses.length)
courses.push(['Cafe'])

total.textContent = courses.length+" articles"

// for(let i = 0 ; i < courses.length ; i++){
//     const listes = document.createElement("li")
//     listes.textContent = i + 1 +"." + courses[i]
//     liste.appendChild(listes)
// }

courses.forEach(function(element, index){
    const listes = document.createElement("li")
    listes.textContent = index + 1 + "." + element
    liste.appendChild(listes)
})
