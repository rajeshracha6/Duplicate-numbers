Find the Unique numbers and Duplicate numbers 

arr=[8,2,4,2,1,1,5,1]
emp =[], unq=0;dup=0
for(i of arr){
    if(!emp.includes(i)){
        emp.push(i)
    }
}
console.log(emp)
for(i of emp){
    c=0;
    for(j of arr){
        if(i==j){
            c++
        }
        }
        if(c==1){
            unq=unq+i+" "
        }
        else{
            dup=dup+i+" "
        }
    }
console.log("Unique numbers are: ",unq)
console.log("Duplicate numbers are: ",dup)


arr=prompt("Enter the number: ").split("").map(Number)
emp =[], unq=0;dup=0
for(i of arr){
    if(!emp.includes(i)){
        emp.push(i)
    }
}
console.log(emp)
for(i of emp){
    c=0;
    for(j of arr){
        if(i==j){
            c++
        }
        }
        if(c==1){
            unq=unq+i+" "
        }
        else{
            dup=dup+i+" "
        }
}
console.log("Unique numbers are: ",unq)
console.log("Duplicate numbers are: ",dup)


arr=prompt("Enter the number: ").split("").map(Number)
emp =[], unq=0;dup=0
for(i of arr){
    if(!emp.includes(i)){
        emp.push(i)
    }
}
console.log(emp)
for(i of emp){
    c=0;
    for(j of arr){
        if(i==j){
            c++
        }
        }
        if(c==1){
            unq=unq+i+" "
            // console.log(i)
        }
        else{
            dup=dup+i+" "
        }
}

if(unq.length==2){
    console.log("The Unique number is: ",unq)
    
}else{
    console.log("The unique numbers are: ",unq)
}
if(dup.length==2){
    console.log("The Duplicate number is: ",dup)
    
}else{
    console.log("The Duplicate numbers are: ",dup)
} 
--> Enter the number: 543545
[ 5, 4, 3 ]
The Unique number is:  3 
The Duplicate numbers are:  5 4
