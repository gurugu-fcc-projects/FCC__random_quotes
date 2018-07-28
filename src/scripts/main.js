require("../styles/main.scss");

$(document).ready(function() {
  var colors = [
      "#FBC02D",
      "#5D4037",
      "#E64A19",
      "#F57C00",
      "#FFA000",
      "#455A64",
      "#FBC02D",
      "#AFB42B",
      "#689F38",
      "#388E3C",
      "#00796B",
      "#0097A7",
      "#0288D1",
      "#1976D2",
      "#303F9F",
      "#512DA8",
      "#7B1FA2",
      "#C2185B",
      "#D32F2F",
      "#616161"
    ],
    oldColor = "",
    slicedColor = "",
    onLoadTimeOut,
    blockButton;

  document.getElementById("next-quote").addEventListener("click", changeQuote);
  changeQuote();

  function randomColor() {
    var filteredColors, randomNumber;

    if (currentColor) {
      filteredColors = colors.filter(function(color) {
        return color !== currentColor;
      });
    } else {
      filteredColors = colors;
    }
    currentColor = filteredColors[Math.floor(Math.random() * (filteredColors.length))];

    randomNumber = Math.floor(Math.random() * filteredColors.length);
    slicedColor = filteredColors[randomNumber];

    return slicedColor;
  }

  function animateCircle(newColor) {
    var circle = document.querySelector(".circle-bg");

    circle.classList.add("circle-click");
    circle.style.backgroundColor = newColor;

    // change buttons color
    $("i").animate(
      {
        color: oldColor
      },
      600,
      function() {
        // delete the old cirlce
        $circleBg.remove();
        // add a new circle underneath a quote circle
        $("#wrapper").append(newElement);
        // change body bg-color to that of the old circle
        $("body").css({
          "background-color": oldColor
        });
      }
    );
  }

  function generateQuote() {
    var $quoteText = $("#quote-text"),
      $quoteAuthor = $("#quote-author");

    // get a new quote
    $.getJSON(
      "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
      function(data) {
        // insert the new quote into a corresponding placeholder
        $quoteText.text(data.quoteText);
        // insert the author if he exists, otherwise the placeholder will be empty
        data.quoteAuthor
          ? $quoteAuthor.text("- " + data.quoteAuthor)
          : $quoteAuthor.text("");
        // set a link for 'tweet' button
        $("#tweet").attr(
          "href",
          "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
            encodeURIComponent("'" + data.quoteText + "' '" + data.quoteAuthor)
        );
      }
    ).fail(function() {
      // show default message if there is an error
      $quoteText.html("CONNECTION FAILURE");
      $quoteAuthor.html("");
    });
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

    // block 'next quote' button while there is still animation going on
    if (onLoadTimeOut || blockButton) {
      return null;
    } else {
      // block 'next quote' button until all animations are over
      blockButton = true;
      // hide current quote and its author
      $quoteText.animate(
        {
          opacity: 0
        },
        800
      );
      $quoteAuthor.animate(
        {
          opacity: 0
        },
        800,
        function() {
          // set the expanding circle animation
          animateBgColor();
          // get a new quote
          generateQuote();
          // set a new color for the quote and author
          $quoteText.css({
            color: oldColor
          });
          $quoteAuthor.css({
            color: oldColor
          });
          // show new quote and its quthor
          $quoteText.animate(
            {
              opacity: 1
            },
            800
          );
          $quoteAuthor.animate(
            {
              opacity: 1
            },
            800,
            function() {
              // unblock 'next quote' button
              blockButton = false;
            }
          );
        }
      );
    }
  }

  function showQuote() {
    document.querySelector("#quote").style.opacity = 1
  }

    // show text elements only after a new quote is loaded and all animations are finished
    onLoadTimeOut = window.setTimeout(function() {
      $("i").animate(
        {
          opacity: 1
        },
        800
      );
      $quoteText.animate(
        {
          opacity: 1
        },
        800
      );
      $quoteAuthor.animate(
        {
          opacity: 1
        },
        800
      );
      // unblock 'next quote' button
      onLoadTimeOut = 0;
    }, 800);
  }
});
