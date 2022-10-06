   //  Grab the queryString from the URL
   let arr = [];
   let queryString = window.location.search;
   let urlParams = new URLSearchParams(queryString);

   //  Iterate over key value pairs
   urlParams.forEach(function (value, key) {
     arr.push(value);
   });

   //  Grab specific keys and do something with the value
   let utmCampaign = urlParams.get("utm_campaign");
   let utmSource = urlParams.get("utm_source");
   let utmMedium = urlParams.get("utm_medium");
   let utmContent = urlParams.get("utm_content");
   let utmTerm = urlParams.get("utm_term");

   let lp = "lp=" + encodeURI(window.location.host + window.location.pathname);

   let select = "1pack";
   urlParams.forEach(function (value, key) {
     if (key == "target" && value.includes("top")) {
       select = "2pack";
     }
   });

   let fd1 = "fd=";
   if(typeof giddyUtils.genFD() !== undefined) {
     fd1 = giddyUtils.genFD();
   }
   let deskButtonSelf = `https://eddiebygiddy.surveysparrow.com/s/try-eddie-quiz/tt-5e5546?quizisfor=myself&utm_campaign=${utmCampaign}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_term=${utmTerm}&select=${select}&${fd1}&${lp}`;
   let deskButtonPartner = `https://eddiebygiddy.surveysparrow.com/s/try-eddie-quiz/tt-5e5546?quizisfor=mypartner&utm_campaign=${utmCampaign}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_term=${utmTerm}&select=${select}&${fd1}&${lp}`;
   let deskButton = `https://eddiebygiddy.surveysparrow.com/s/try-eddie-quiz/tt-5e5546?utm_campaign=${utmCampaign}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_term=${utmTerm}&select=${select}&${fd1}&${lp}`;
   
   $('#self').attr('href', deskButtonSelf);
   $('#partner').attr('href', deskButtonPartner);
   $('#takeQuiz').attr('href', deskButton);

   $(function () {
    count1 = 0;
    wordsArray1 = [
      "a prescription",
      "awkward interruptions",
      "side effects of ED pills",
      "blocking the urethra",
    ];
    setInterval(function () {
      count1++;
      $("#rotating-word").fadeOut(600, function () {
        $(this)
          .text(wordsArray1[count1 % wordsArray1.length])
          .fadeIn(600);
      });
    }, 2000);
  });

  $(function () {
    count = 0;
    wordsArray = [
      "proven to work.",
      "available online.",
      "comfortable.",
      "easy to use.",
      "pill-free.",
      "body-safe.",
      "designed by urologists.",
      "FDA registered."
    ];
    setInterval(function () {
      count++;
      $("#rotating-word-new").fadeOut(600, function () {
        $(this)
          .text(wordsArray[count % wordsArray.length])
          .fadeIn(600);
      });
    }, 2000);
  });

      // Example starter JavaScript for disabling form submissions if there are invalid fields
      (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();

       // Example starter JavaScript for disabling form submissions if there are invalid fields
       (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();

      $(".card-header").click(function () {
        $(this).find("i").toggleClass("fas fa-plus fas fa-minus");
      });

      $(".card-header-2").click(function () {
        $(this).find("i").toggleClass("fas fa-plus fas fa-minus");
      });

      $(".card-header").click(function () {
        $(this).find("i").toggleClass("fas fa-plus fas fa-minus");
      });