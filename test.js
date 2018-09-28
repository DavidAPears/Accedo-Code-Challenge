// Task (broken down):
// Write a function that rearranges a positive integer (N) into its largest possible value.
// NOTE: If the N is:-
//  - a single digit...then return that
//  - is already the maximum possible integer...then return that
//  - exceeds 100mill then return..'minus 1'


// 'solution' rearranges digits within an int to return maximum value:
function solution(N) {
  var string = N.toString();
  var arr = [];
  for (var i = 0; i < string.length; i++) {
    arr.push(Number(string[i]));
  }
  arr.sort(function(a,b) {
    return b-a;
  });
  if (N > 100000000) {
        return -1;
    }
  return Number(arr.join(""));

  }
solution(2147483647);

// solution(213);       returned '321' - correct
// solution(553)        returned '553' - correct
// solution(2147483647) returned '8776444321' [exceeds 100 mill] if statement req'd
// solution(2147483647) now returns '-1' - correct
