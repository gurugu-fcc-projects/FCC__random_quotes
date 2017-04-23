var css = require('../styles/main.scss');

$(document).ready(function() {

  var colors = ["#FBC02D", "#5D4037", "#E64A19", "#F57C00", "#FFA000", "#455A64", "#FBC02D", "#AFB42B", "#689F38", "#388E3C", "#00796B", "#0097A7", "#0288D1", "#1976D2", "#303F9F", "#512DA8", "#7B1FA2", "#C2185B", "#D32F2F", "#616161"],
      currentColor;

  document.getElementById("next-quote").addEventListener("click", changeQuote);
  changeQuote();

  function randomColor() {
    var filteredColors;

    if (currentColor) {
      filteredColors = colors.filter(function(color) {
        return color !== currentColor;
      });
    } else {
      filteredColors = colors;
    }
    currentColor = filteredColors[Math.floor(Math.random() * (filteredColors.length))];

    return currentColor;
  }

  function animateCircle(newColor) {
    var circle = document.querySelector(".circle-bg");

    circle.classList.add("circle-click");
    circle.style.backgroundColor = newColor;

    $("i").animate({
      color: newColor
    }, 600, function() {
      circle.classList.remove("circle-click");
      document.querySelector("body").style.backgroundColor = newColor;
    });
  }

  function hideQuote() {
    document.querySelector("#quote-text").textContent.length > 0
      ? document.querySelector("#quote").style.opacity = 0
      : null
  }

  function setQuote(data) {
    //--- set quote text
    document.querySelector("#quote-text").textContent = data.quoteText;
    //--- set quote author
    data.quoteAuthor
      ? document.querySelector("#quote-author").textContent = "- " + data.quoteAuthor
      : document.querySelector("#quote-author").textContent = "(unknown author)";
    //--- set twitter link
    document.querySelector("#tweet").setAttribute("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent("'" + data.quoteText + "' '" + data.quoteAuthor));
  }

  function setQuoteColor(color) {
    document.querySelector("#quote").style.color = color;
  }

  function showQuote() {
    document.querySelector("#quote").style.opacity = 1
  }

  function changeQuote() {
    var url = 'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';

    //--- disable NEXT QUOTE button
    document.getElementById("next-quote").setAttribute("disabled", "disabled");
    //--- enable NEXT QUOTE button
    setTimeout(function() {
      document.getElementById("next-quote").removeAttribute("disabled");
    }, 1100);

    //--- reach for the next quote
    axios({
        method:'GET',
        url: url,
      })
      .then(function(response) {
        //--- handle incorrectly escaped apostrophe in a quote
        if (typeof response.data == "string") {
          return JSON.parse(response.data.replace(/(\\')/g, "'"))
        }
        return response.data;
      })
      .then(function(responseData) {
        hideQuote();

        return responseData;
      })
      .then(function(responseData) {
        var newColor = randomColor();

        setQuote(responseData);
        setQuoteColor(newColor);

        return newColor;
      })
      .then(function(newColor) {
        animateCircle(newColor);
        showQuote();
      })
      .catch(function(error) {
        document.querySelector("#quote-text").textContent = "Error: " + error;
        document.querySelector("#quote-author").textContent = "";
      });
  }

});
