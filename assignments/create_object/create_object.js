function CreateObject(arr) {
    const obj = {}
    for(var i=0;i<arr.length ;i+=2)
    {
        obj[arr[i]]=arr[i+1]
    }
    return obj
}
    // Write your code here


module.exports = CreateObject;
