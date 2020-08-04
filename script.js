 // It's well-explained by John Dugan https://john-dugan.com/javascript-debounce/
 function debounce(func, wait = 5, immediate = true) {
     var timeout;
     return function () {
         var context = this,
             args = arguments;
         var later = function () {
             timeout = null;
             if (!immediate) func.apply(context, args);
         };
         var callNow = immediate && !timeout;
         clearTimeout(timeout);
         timeout = setTimeout(later, wait);
         if (callNow) func.apply(context, args);
     };
 }


 //select all the images
 const images = document.querySelectorAll('.slide-in')


 const funcForSliding = function () {
     images.forEach(image => {
         //determine when our bottom window is at the half of the img
         const halfOfTheImg = (window.scrollY + window.innerHeight) - image.height / 2
         //determine the bottom of the img position
         const bottomOfImg = image.offsetTop + image.height

         const isInHalf = halfOfTheImg > image.offsetTop
         const isNotPassed = halfOfTheImg > bottomOfImg
         if (isInHalf && isNotPassed) {
             image.classList.add('active')
         } else {
             image.classList.remove('active')
         }
     })
 }

 //add a event for scrolling 
 window.addEventListener('scroll', debounce(funcForSliding))