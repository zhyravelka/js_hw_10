const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  $(document).ready(function () {
   
      $('[data-action="start"]').click(function () {
      
          interval = setInterval(() => {
        
              const colors = ["red", "green", "violet", "gray", "blue", "yellow"];
              const time = randomIntegerFromInterval(0, colors.length-1);
       
              $("body").css("background-color", colors[time]);
              $('[data-action="start"]').attr('disabled', true);
      }, 1000);
    });
  
      $('[data-action="stop"]').click(function () {
          clearInterval(interval);
          $('[data-action="start"]').attr('disabled', false);
    });
  });
  