let courses = [
 { name: "Courses in England", prices: [0, 100] }, 
 { name: "Courses in Germany", prices: [500, null] }, 
 { name: "Courses in Italy", prices: [100, 200] }, 
 { name: "Courses in Russia", prices: [null, 400] },
 { name: "Courses in China", prices: [50, 250] },
 { name: "Courses in USA", prices: [200, null] },
 { name: "Courses in Kazakhstan", prices: [56, 324] },
 { name: "Courses in France", prices: [null, null] },
 ];
 let requiredRange1 = [null, 200];
 let requiredRange2 = [100, 350];
 let requiredRange3 = [200, null];
 
 
 
  const findRange = (arr1, arr2) => {
   const [e1, e2] = arr1;
   const [e3, e4] = arr2;
   const left = Math.max(e1, e3);
   const right = Math.min(e2, e4);
   if (left<right) {
      return [left, right];
   }
   return false;
};

 function isNull(arr) {
    arr[0] === null ? arr[0] = 0 : arr[0] ;
    arr[1] === null ? arr[1] = Infinity : arr[1];
    return arr;
 }
  function filterCourse(requiredRange,courses) {
    return courses.filter(course=>
  //   if (findRange(isNull(requiredRange),isNull(course.prices))) 
  //      {
  //        return true;
  //      } 
  //    else 
  //     {
  //       return false;
  //    }
      course.prices= findRange(isNull(requiredRange),isNull(course.prices))
     )
 }
 console.log(filterCourse(requiredRange1,courses)); 
 console.log(filterCourse(requiredRange2,courses)); 
 console.log(filterCourse(requiredRange3,courses)); 
 
 
 
