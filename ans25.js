    let age = 19;
    if(age>=20){
      let weight = 60;
      let height = 170/100;
      const BMI = weight/(height * height);
      if (BMI<18.5){
         console.log("You Are Underweight");
      }
      else if(BMI>=18.5 && BMI<=24.9 ){
         console.log("You Are Normal weight");
      }
      else if(BMI>=25 && BMI<=29.9){
         console.log("You Are Overweight");
      }
      else if(BMI>30){
         console.log("You Are Obese");
      }
    }
    else{
      console.log("You have to be atleast 20 year old");
    }
