"use strict";
/* global isArray */
var arraySimilarity = function(arr1, arr2){
    var arr = [];
    if(isArray(arr1) && isArray(arr2)){
        for(var i=0,imax=arr1.length; i<imax; i+=1){
            for(var n=0,nmax=arr2.length; n<nmax; n+=1){
                if(arr1[i] === arr2[n]){
                    arr.push(arr1[i]);
                    break; }}}
    }
    return arr; };
