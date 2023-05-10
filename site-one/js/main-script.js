function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  // Accordion
  const accordion = document.getElementsByClassName('container');

        for (i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener('click', function () {
                this.classList.toggle('active')
            })
        }


  // Search Bar
  let sBarForm = document.getElementById('s_bar_form');
  function showSearchBar(){
    sBarForm.classList.add("show");
  }
  // $(document).ready(function(){
  //   $('#search_form').click(function(){
  //     $('#s_bar_form').toggle();
  //   });
  // });
  // $('#search_form').click(function () {
  //   $('#s_bar_form').toggle();
  // });