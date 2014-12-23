$( function () {
  showPage("Home", null);
});

function showPage(page, elt) {
  lis = $("ul.nav-darx").children();
  lis.each( function(index) {
    var title = $(this).children().text();
    if (title === page) {
      $(lis[index]).attr("class", "active");
    } else {
      $(lis[index]).removeClass();
    }
  });
  $("#content").load("pages/" + page.toLowerCase() + ".html", loadCallback(page));
}

function loadCallback(page) {
  return function (responseText, textStatus, xhr) {
    postLoad(page);
  }
}

function postLoad(page) {
  if (page === "Home") {
    postLoadHome();
  } else if (page === "Contacts") {
    postLoadContacts();
  }
}

function postLoadContacts() {
  // Email
  mailEl = mailTo("darxfantastiques", "hotmail", "com", "contact DARX");
  $("#email_address").append(mailEl);
}

function postLoadHome() {
  // Email
  mailEl = mailTo("darxfantastiques", "hotmail", "com", "contact DARX");
  $("#email_address").append(mailEl);

  // Telephone
  $("#tel_number").append(telNum("06","45","73","63","74"));

  // Journee Jeux
  $(".responsive-calendar").responsiveCalendar({
    time: $.datepicker.formatDate('yy-mm', new Date()),
    events: {
      "2014-10-25": {},
      "2014-11-08": {}, 
      "2014-11-22": {}, 
        "2014-12-13": {
          "number" : 1,
          "badgeClass":"badge-warning", 
          "dayEvents": [
          {"name":"journée continue",
            "hour":"09:00"}
          ]
        }
    }
  });
};

function mailTo(dest, domain, ext, text) {
  return "<a href=\"mailto:" + dest + "@" + domain + "." + ext + "\">" + text + "</a>";
}

function telNum(a,b,c,d,e) {
  return a + " " + b + " " + c + " " + d + " " + e;
}
