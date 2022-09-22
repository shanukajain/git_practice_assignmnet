function prime(num){
 	 if(num<=1){
  	  return false;
 		 }
        for(k=2;k<=(num**1/2);k++){
            if(num%k==0){
                return false;
            }
        }
        return true;
    }
let num=10;
console.log(prime(10));