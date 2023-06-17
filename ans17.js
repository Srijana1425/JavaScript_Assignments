let month = "March";
if(month  == "January" || month  == "March" || month  == "May" || month  == "July" || month  == "August" || month  == "October" || month  == "December"){
    console.log("31 Days");
}
else if(month  == "April" || month  == "June" || month  == "September" || month  == "Novmber" ){
    console.log("30 Days");
}
else if(month == "February"){
    console.log("28/29 Days");
}