# Javascript arraySimilarity function
Javascript function arraySimliarity which accepts two parameters (arrays) and returns an iterative array of the values which are repeated in both. Key agnostic - iterative.
## Usage
```
    arraySimilarity(array1, array2);

    arraySimilarity([1,2,3,4,5,6], [1,2,3,4,5]) = [1,2,3,4,5];
    arraySimilarity([1,2,3,4,5], [1,2,3,4,5,6]) = [1,2,3,4,5];
```

## Methodology
```
    var arr = [];
    if(isArray(arr1) && isArray(arr2)){
        for(var i=0,imax=arr1.length; i<imax; i+=1){
            for(var n=0,nmax=arr2.length; n<nmax; n+=1){
                if(arr1[i] === arr2[n]){
                    arr.push(arr1[i]);
                    break; }}}
    }
    return arr;
```

## Issues

* Need to look at building a more generic function that can cope with strings, maps, numbers, etc. Would also be nice accept to spread arguments (...[])
* Needs proper testing log, e.g. browser checks
* NS version uses IMNS, not currently using ES6 namespacing
