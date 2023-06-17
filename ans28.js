// *****************************************************************************************************
// // Answer A

for( i=1; i<=3; i++ ){
	
    console.log("*".repeat(i));

}


// *****************************************************************************************************
// // Answer B

let input=3;
for( i=1; i<=3; i++ ){
	
    console.log("*".repeat(input));

}

// *****************************************************************************************************
// Answer C

let n = 3;
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(' ')
  }
  // printing stars
  for (let k = 0; k < 2 * i - 1; k++) {
    process.stdout.write('*')
  }
  console.log();
}