function showPage(page) {
  console.log("load");
  $("#content").load("pages/home.html", loadCallback(page));
}

function loadCallback(page) {
  return function (responseText, textStatus, xhr) {
    postLoad(page);
  }
}

function postLoad(page) {
  if (page === "home") {
    postLoadHome();
  }
}

function postLoadHome() {
  console.log("postLoadHome");
  // Email
  mailEl = mailTo("darxfantastiques", "hotmail", "com", "contact DARX");
  console.log(mailEl);
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
