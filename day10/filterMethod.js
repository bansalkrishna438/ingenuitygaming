var ages=[32,3,34,35];
var result = ages.filter(filterAge);
function filterAge(age){
    return age > 18;
}
console.log(result);

//example-2

let cities=[
    {name:"add",population:7867},
    {name:"agh",population:7878},
    {name:"att",population:7234},
    {name:"abd",population:745},
    {name:"ald",population:5465},
]

//  var bigCities=[]
//  for(var i=0;i<cities.length;i++){
//     if(cities[i].population>3000){
//         bigCities.push(cities[i]);
//     }
//  }
// console.log(bigCities);

bigCities=cities.
filter((city)=>city.population>3000)
.sort(function(n1,n2){
    return n2.name-n1.name;
});
console.log(bigCities);
// var result = ages.filter(()=>{
//     return age > 18;
// });