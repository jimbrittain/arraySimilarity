"use strict";
var __imns = function(){ return window; }
describe("arraySimlarity Test Suite", function(){
    beforeEach(function(done){
        var requireArr = [
            'dist/c/Namespace/Namespace.js',
            'dist/f/isArray/isArray.js'
        ];
        for(var i=0, imax=requireArr.length; i<imax; i+=1){
            var a = document.createElement('script');
            a.src = requireArr[i];
            a.type = 'text/javascript';
            document.body.appendChild(a); 
        }
        setTimeout(function(){ done(); }, 1000);
    });

        var adr = __imns();
        var obj = {}, arr = [];
        var arr1 = [1,2,3,4,5];
        var arr2 = [1,2,3,4,5,6];

    it("arraySimilarity is a function", function(){ expect(typeof adr.arraySimilarity === 'function').toBe(true); });
    it("arraySimilarity: arraySimilarity([1,2,3,4], [1,2,3]) = [1,2,3]", function(){ 
        var a = adr.arraySimilarity([1,2,3,4], [1,2,3]);
        expect(a.length === 3 && a[0] === 1 && a[1] === 2 && a[2] === 3).toBe(true); });
    it("arraySimilarity: arraySimilarity([4,5], [3,4,5,6]) = [4,5]", function(){ 
        var a = adr.arraySimilarity([4,5], [3,4,5,6]);
        expect(a.length === 2).toBe(true); });
});
