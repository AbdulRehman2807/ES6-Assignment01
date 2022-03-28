const refrence = document.getElementById("refrence")

const array =[
    {
        name : "Abdul Rehman",
        e : 9,
        id : 1
    },
    {
        name : "Moiz",
        e : 9,
        id : 2
    },
    {
        name : "Yaseen Khan",
        e : 9,
        id : 3
    },
    {
        name : "Ahtisham",
        e : 9,
        id : 4
    },
    {
        name : "Faizan",
        e : 9,
        id : 5
    },
]

const objValiue = array.map(function(x){
    
    const valiue = Object.values(x)
    return valiue
       
})
const result1 = objValiue.flat();
console.log(result1);


const objKey = array.map(function(x){
    
        // const key = x.key()
        const keys = Object.keys(x)
        return keys
       
    })
   const result = objKey.flat();
//    console.log(result);

// let ul=document.createElement("ul")
// let lis=document.createElement("li")
// ul.appendChild(lis)
// lis.appendChild(result)
// refrence.appendChild(result)