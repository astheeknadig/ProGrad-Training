const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

var entry = Object.entries(companies);
var sorted = entry.sort((c1,c2) => {
  return c1[1].start - c2[1].start
})
console.log("Companies sorted based on start year: ");
for (let x of sorted){
  console.log(x[1])
}
console.log("\n");

var mapped = companies.map( (company) => {
    return company.end - company.start
})
console.log(`Life time of each company: ${mapped}`);
console.log("\n");

var reduced = ages.reduce((total, age) => {
  return total + age
})
console.log(`Average of ages: ${reduced/ages.length}`);
console.log("\n");

var filtered = companies.filter((company) => {
  return company.start == 1981
})

console.log(`Companies started in 1981:`);
for (let x of filtered){
  console.log(x.name);
}