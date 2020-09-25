/************************
Pure java script
*************************/
// {
//    let num_of_guys, i;
//    num_of_guys = document.querySelectorAll(".cry").length;
//
//    for (i = 0; i < num_of_guys; i++) {
//
//       // add Event Listener to buttons if a user click on it
//       document.querySelectorAll("button")[i].addEventListener("click", function() {
//          audio(this.innerHTML);
//          animation(this.innerHTML);
//       });
//    }
//
//    // add Event Listener to whole page if a user press the key
//    document.addEventListener("keypress", function(event) {
//       audio(event.key);
//       animation(event.key);
//    });
//
//    // function to play audio
//    function audio(value) {
//
//       switch (value) {
//          case "a":
//             let a = new Audio("sounds/a.mp3");
//             a.play();
//             break;
//
//          case "f":
//             let f = new Audio("sounds/f.mp3");
//             f.play();
//             break;
//
//          case "h":
//             let h = new Audio("sounds/h.mp3");
//             h.play();
//             break;
//
//          case "j":
//             let j = new Audio("sounds/j.mp3");
//             j.play();
//             break;
//
//          case "k":
//             let k = new Audio("sounds/k.mp3");
//             k.play();
//             break;
//
//          case "n":
//             let n = new Audio("sounds/n.mp3");
//             n.play();
//             break;
//
//          case "s":
//             let s = new Audio("sounds/s.mp3");
//             s.play();
//             break;
//          case "r":
//             let r = new Audio("sounds/r.mp3");
//             r.play();
//             break;
//       }
//    }
//
//    //  function to add animation
//    function animation(value) {
//       document.querySelector("." + value).classList.add("pressed");
//
//       // remove a pressed class after a while
//       setTimeout(function() {
//          document.querySelector("." + value).classList.remove("pressed");
//       }, 200);
//    }
// }


/**************************************
Using jquery
*************************************/
{
   // add Event Listener to buttons if a user click on it
   $("button").on("click", function(){
      audio(this.innerHTML);
      animation(this.innerHTML);
   });

   // add Event Listener to whole page if a user press the key
   $(document).on("keypress", event => {
      audio(event.key);
      animation(event.key);
   });

   // function to play audio
   function audio(value) {

      switch (value) {
         case "a":
            let a = new Audio("sounds/a.mp3");
            a.play();
            break;

         case "f":
            let f = new Audio("sounds/f.mp3");
            f.play();
            break;

         case "h":
            let h = new Audio("sounds/h.mp3");
            h.play();
            break;

         case "j":
            let j = new Audio("sounds/j.mp3");
            j.play();
            break;

         case "k":
            let k = new Audio("sounds/k.mp3");
            k.play();
            break;

         case "n":
            let n = new Audio("sounds/n.mp3");
            n.play();
            break;

         case "s":
            let s = new Audio("sounds/s.mp3");
            s.play();
            break;
         case "r":
            let r = new Audio("sounds/r.mp3");
            r.play();
            break;
      }
   }

   //  function to add animation
   function animation(value) {
      $("." + value).addClass("pressed");

      // remove a pressed class after a while
      setTimeout(function() {
         $("." + value).removeClass("pressed");
      }, 200);
   }
}
