function evenodd(num) {
    for(i = 0 ; i< num.length; i++)
     {
       if (num[i]%2===0)
       {
           console.log("even "+ num[i]);
      }else {
            console.log("odd  "+ num[i]);
       }
      console.log(num[i]);
      
     }
return 0;
}
console.log(evenodd([3,1,5,1,7,9,7,4,5,10,12,14]));
