/**
 * 全排列
 */

 var permutation = function(str) {
     if(str == null) return ;
     permutation1(str,str)
 }

//  var permutation1 = function(str,begin) {
//     for(let i = 0 ; i < str.length)
//  }

var perm = function(s) {
    var result = [];
    if (s.length <= 1) {
      return [s];
    } else {
      for (var i = 0; i < s.length; i++) {
        var c = s[i];
        var newStr = s.slice(0, i) + s.slice(i + 1, s.length);
        var l = perm(newStr);
           
        for (var j = 0; j < l.length; j++) {
          var tmp = c + l[j];
        //   console.log(tmp)
          result.push(tmp);
        }
      }
    }
    return result;
  };  

  let str = 'abc';
  console.log(perm(str))