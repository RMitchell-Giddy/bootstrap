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

      $(function(){

        //Initialize tooltips
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })

        
        $(".card-header").click(function () {
            $(this).find("i").toggleClass("fas fa-plus fas fa-minus");
        });

        // Frequency
        $(".dropdown-item.dd-f").click(function(){
            //Remove active state
            $(".dropdown-item.dd-f.active").removeClass('active');
            $(this).addClass('active');

            $(".dropdown-toggle.dd-f").text($(this).text());
            $(".dropdown-toggle.dd-f").val($(this).text());
        });

        // Size
        $(".dropdown-item.dd-s").click(function(){    
            //Remove active state
            $(".dropdown-item.dd-s.active").removeClass('active');
            $(this).addClass('active');            

            $(".dropdown-toggle.dd-s").text($(this).text());
            $(".dropdown-toggle.dd-s").val($(this).text());
        });

    });

     // TrustPilot Review Slider LANDING PAGE STYLE
     let reviewJSON = [];
     let reviewRange = 0;
     let reviewPage = 0;
     let reviewContainer = $(".cr-append-here");
 
     let navNext = $("#next");
     let navPrev = $("#prev");
     let navBulletContainer = $(".cr-pages");
     let navBullets;
 
     const approvedReviews =
         "https://prod-27.northcentralus.logic.azure.com:443/workflows/c457e671d82744a4a45288431f09bd78/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rLY-uttOoOhM49X40o1_-v8gItNsRz_7VsdAOziCQfQ";
 
     fetch(approvedReviews, {
         method: "post",
         body: JSON.stringify([
             {
                 reviewId: null,
             },
         ]),
         headers: {
             "Content-Type": "application/json",
         },
     })
     .then((response) => response.json())
     .then((data) => {
         //No longer needed
         //getReviews(data);
         reviewJSON = data.reverse();
         
         setUpReviewNav();
         pageReviews('F');
     });
 
     function displayNextReviews(iterator){
         console.log('Iterator in function = ' + iterator);
         var endI = iterator + 5;
         if(endI > reviewJSON.length){
             endI = reviewJSON.length;
         }
         
         //Spit reviews to page
         for (var i = iterator; i < endI; i++) {
             console.log('In for loop');
             try{
             var index = reviewJSON[i].text.indexOf(" ", 200);
             var subStr =
                 reviewJSON[i].text.length >= 200
                     ? reviewJSON[i].text.substring(0, index) + "..."
                     : reviewJSON[i].text;
 
             var stars = reviewJSON[i].stars;
             var starsClass =
                 stars == 5
                     ? "star-rating-5"
                     : stars == 4
                         ? "star-rating-4"
                         : stars == 3
                             ? "star-rating-3"
                             : "";
 
             $(reviewContainer).append(`
             <div class="cr-review-container col-12 border-bottom py-4">
             <div class="d-flex w-100 justify-content-between cr-review-info">
                 <div class="d-flex cr-user-info mb-4">
                     <div class="cr-user-icon mr-3 bg-secondary rounded-circle p-2 text-center text-light cr-user-initital" style="width: 49px; height: 49px; line-height: 200%; flex: 1 0 auto;">${reviewJSON[i].reviewerName[0]}</div>
                     <div class="cr-user-name-stars mr-3">
                         <img class="star ${starsClass} d-block" src="../eddie-pdp/img/red-stars.png" alt="star-reviews" width="90" height="14">
                         <p class="cr-user-name d-inline m-0">${reviewJSON[i].reviewerName}</p>
                         <span class="cr-verification d-inline-flex ml-3 align-content-center">
                             <span class="d-flex align-items-center">
                                 <img src="https://giddywebhosting.blob.core.windows.net/image-assets/verified-check.png" alt="blue check mark" class="cr-check" width="15" height="15">
                                 <span class="blue">Verified</span>
                             </span>
                         </span>
                         <p class="cr-user-age m-0"></p>
                     </div>                    
                 </div>
                 <div class="cr-date">
                     <span class="cr-user-date">${reviewJSON[i].createdAt}</span>
                 </div>
             </div>
             <h5 class="cr-review-title font-weight-bold">${reviewJSON[i].title}</h5>
             <p class="cr-review-body m-0">
                 ${subStr}
             </p>
         </div>`);
     }
     catch(e){
         console.log(e.message);
     }
         }
     }
     function displayPrevReviews(iterator){        
         var endI = iterator - 5;
         if(endI < 0){
             endI = 0;
         }
 
         //Spit reviews to page
         for (var i = endI; i < iterator; i++) {            
             var index = reviewJSON[i].text.indexOf(" ", 200);
             var subStr =
                 reviewJSON[i].text.length >= 200
                     ? reviewJSON[i].text.substring(0, index) + "..."
                     : reviewJSON[i].text;
 
             var stars = reviewJSON[i].stars;
             var starsClass =
                 stars == 5
                     ? "star-rating-5"
                     : stars == 4
                         ? "star-rating-4"
                         : stars == 3
                             ? "star-rating-3"
                             : "";
 
                             $(reviewContainer).append(`
                             <div class="cr-review-container col-12 border-bottom py-4">
                                 <div class="d-flex w-100 justify-content-between cr-review-info">
                                     <div class="d-flex cr-user-info mb-4">
                                         <div class="cr-user-icon mr-3 bg-secondary rounded-circle p-2 text-center text-light cr-user-initital"
                                             style="width: 49px; height: 49px; line-height: 200%; flex: 1 0 auto;">
                                             ${reviewJSON[i].reviewerName[0]}</div>
                                         <div class="cr-user-name-stars mr-3">
                                             <img class="star ${starsClass} d-block" src="../eddie-pdp/img/red-stars.png" alt="star-reviews" width="90" height="14">
                                             <p class="cr-user-name d-inline m-0">${reviewJSON[i].reviewerName}</p>
                                             <span class="cr-verification d-inline-flex ml-3 align-content-center">
                                                 <span class="d-flex align-items-center">
                                                     <img src="https://giddywebhosting.blob.core.windows.net/image-assets/verified-check.png" alt="blue check mark" class="cr-check" width="15" height="15">
                                                     <span class="blue">Verified</span>
                                                 </span>
                                             </span>
                                             <p class="cr-user-age m-0"></p>
                                         </div>
                                     </div>
                                     <div class="cr-date">
                                         <span class="cr-user-date">${reviewJSON[i].createdAt}</span>
                                     </div>
                                 </div>
                                 <h5 class="cr-review-title font-weight-bold">${reviewJSON[i].title}</h5>
                                 <p class="cr-review-body m-0">
                                     ${subStr}
                                 </p>
                             </div>`);
         }
     }
     
 
     function getReviews(data){
         // Filter through review db and grab selected_a (checked) reviews
         var selectedReviews = [];
         for (var i = 0; i < data.length; i++) {
             data[i].selected_a == "True" ? selectedReviews.push(data[i]) : null;
         }
         reviewJSON = selectedReviews;
     }
 
     function pageReviews(dir){
         $(reviewContainer).empty();
 
     //console.log('Curent iterator before: ' + reviewRange);
     if(dir == 'F'){
         displayNextReviews(reviewRange);
 
             //Update Iterator
             reviewRange = updateReviewRange('F');
         }else{
 
             if(reviewRange != 0)
             displayPrevReviews(reviewRange);
 
             reviewRange = updateReviewRange('P');
         }
 
     //console.log('Curent iterator after: ' + reviewRange);
     }
 
     function updateReviewRange(dir, rI = -1, oRR = -1){
         //console.log(`Index = ${rI} \n Original range is ${oRR}\nCurent Range = ${reviewRange}`);
         if(rI != -1){
             if(reviewRange < oRR){
                 reviewRange+=5;
                 if(reviewRange >= reviewJSON.length){
                     reviewRange = reviewJSON.length;
                     reviewRange-=(reviewRange%5);
                 }
             }
             else{
                 if(dir == 'F'){
                     //Update Iterator
                     reviewRange+=5;
                     if(reviewRange >= reviewJSON.length){
                         reviewRange = reviewJSON.length;
                         reviewRange-=(reviewRange%5);
                     }
                 }else if(dir == 'P'){
                     reviewRange-=5;
                     if(reviewRange <= 5){
                         reviewRange = 5;
                     }
                     if(reviewRange == reviewJSON.length){
                         var mod = reviewJSON.length % 5;
                         reviewRange-=mod;
                     }
                 }
             }
 
             return reviewRange;
         }
     }
         
     function setUpReviewNav(){
         let count = Math.floor(reviewJSON.length/5);
         if(reviewJSON.length % 5 != 0){
             count++;
         }
 
         if(count > 0){
             $(navBulletContainer).append(`<span class="cr-page-num text-secondary cr-active">1</span>`);
 
             for (let i = 1; i < count; i++) {
                 $(navBulletContainer).append(`<span class="cr-page-num text-secondary">${i+1}</span>`);
             }
 
             navBullets = $(".cr-pages .cr-page-num"); 
             
             $(navBullets).on('click', function(){
                 let index = $(navBullets).index(this);
     
                 //Set iterator
                 let origRR = reviewRange;
                 reviewRange = index*5;
                 //console.log('Review Range Var Before Loop = ' + reviewRange);
     
                 //Set active number
                 Array.from($(navBullets)).forEach(li => {
                     $(li).removeClass('cr-active');
                 });
                 reviewPage = index;
                 $(navBullets[reviewPage]).addClass('cr-active');
     
                 //Show results
                 $(reviewContainer).empty();
                 displayNextReviews(reviewRange);
     
                 //Set iterator
                 reviewRange = updateReviewRange('',index, origRR);
     
                 //console.log('Review Range Var After Loop = ' + reviewRange);
             });
 
             
         }
     }
 
     function getIndex(){
         //Gets index of current page
         let navBullets = $(".cr-pages .cr-page-num");
         let taget = $(".cr-pages .cr-page-num.cr-active"); 
         return  $(navBullets).index(taget);
     }
 
     $(navNext).on('click', () =>{
         //pageReviews('F');
 
         reviewPage++;
         if(reviewPage > ($(navBullets).length-1))
         reviewPage = $(navBullets).length-1;
 
         Array.from($(navBullets)).forEach(li => {
             $(li).removeClass('cr-active');
         });
 
         $(navBullets[reviewPage]).addClass('cr-active');
 
         //Get index and set review range
         let index = getIndex();
         let origRR = reviewRange;
         reviewRange = index*5;
 
         //Show results
         $(reviewContainer).empty();
         console.log('Review range = ' + reviewRange);
         displayNextReviews(reviewRange);
 
         //Set iterator
         reviewRange = updateReviewRange('',index, origRR);
     });
     $(navPrev).on('click', () =>{
         //pageReviews('P');
 
         reviewPage--;
         if(reviewPage < 0)
         reviewPage = 0;
 
         Array.from($(navBullets)).forEach(li => {
             $(li).removeClass('cr-active');
         });
 
         $(navBullets[reviewPage]).addClass('cr-active');
 
         //Get index and set review range
         let index = getIndex();
         let origRR = reviewRange;
         reviewRange = index*5;
 
         //Show results
         $(reviewContainer).empty();
         displayNextReviews(reviewRange);
 
         //Set iterator
         reviewRange = updateReviewRange('',index, origRR);
     });