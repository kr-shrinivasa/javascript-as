function getEven(arr) 
{
    
    var result = arr.filter(numb => numb%2===0)
    return result
}
function multiplyByN(arr, n) {
    
    arr = arr.map((num,n)=>num*2)
    return arr
}

function removeNthElement(arr, n) 
{
   
   
    const opp = arr.filter((element,index) => {
        return index !==n;
    });
  
   return opp
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}