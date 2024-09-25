

// for(let num = 61; num<=100; num++){
    
//     if(num %2 !== 0){


//         console.log("Print all the odd number",num)
        
//     }
// }

// for (let i = 61; i <= 100; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }

  // for(let num =78; num<=98; num++){
  //   if(num%2==0){
  //     console.log("print the all even number",num)
  //   }
  // }

  //sum of all odd numbers
  let sum=0;
  for(let i=81; i<=131; i++){
    if(i%2!==0){
      console.log(i)
      sum = sum +i;
      
     
    }
    
  }
  console.log("All the odd numbers's some is :"+sum) 

  //sum of all the even numbers
  let sum1=0;
  for(let x=206; x<311;x++){
    if(x%2==0){
      console.log(x);
      sum1=sum1+x;
    }
  }
console.log("All the even numbers's some is :",sum1)