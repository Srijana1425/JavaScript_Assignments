const countries  = ["India", "Srilanka", "Austrelia", "China" ]
if (countries.includes("Ethiopia")){
  console.log("ETHIOPIA");
}
else{
  countries.push("Ethiopia")
  console.log(countries);
}