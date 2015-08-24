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
  } else if (page === "Magic") {
    postLoadMagic();
  } else if (page === "LudiDARX") {
    postLoadLudidarx();
  }
}

function postLoadLudidarx() {
  // Email
  mailEl = mailTo("darxfantastiques", "hotmail", "fr", "contact DARX");
  $("#email_address").append(mailEl);

  // Telephone
  $("#tel_number").append(telNum("06","45","73","63","74"));
}

function postLoadMagic() {
  $(".magic-calendar").responsiveCalendar({
    time: $.datepicker.formatDate('yy-mm', new Date()),
    translateMonths: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    activateNonCurrentMonths: true,
    events: {
      "2015-09-11": {},
      "2015-09-18": {},
      "2015-09-25": {},
      "2015-10-02": {},
      "2015-10-09": {},
      "2015-10-16": {},
      "2015-10-23": {},
      "2015-10-30": {},
      "2015-11-06": {},
      "2015-11-13": {},
      "2015-11-20": {},
      "2015-11-27": {},
      "2015-12-04": {},
      "2015-12-11": {},
      "2015-12-18": {}
    }
  });
}

function postLoadContacts() {
  // Email
  mailEl = mailTo("darxfantastiques", "hotmail", "fr", "notre email");
  $("#email_address").append(mailEl);
}

function postLoadHome() {
  // Email
  mailEl = mailTo("darxfantastiques", "hotmail", "fr", "contact DARX");
  $("#email_address").append(mailEl);

  // Telephone
  $("#tel_number").append(telNum("06","45","73","63","74"));

  // Journee Jeux
  $(".responsive-calendar").responsiveCalendar({
    time: $.datepicker.formatDate('yy-mm', new Date()),
    translateMonths: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    activateNonCurrentMonths: true,
    events: {
      "2015-09-12": {},
      "2015-09-26": {},
      "2015-10-10": {
        "number" : 1,
        "badgeClass":"badge-warning", 
        "dayEvents": [
        {"name":"Ludidarx",
          "hour":"09:00"}
        ]
      },
      "2015-10-11": {
        "number" : 1,
        "badgeClass":"badge-warning", 
        "dayEvents": [
        {"name":"Ludidarx",
          "hour":"09:00"}
        ]
      },
      "2015-10-24": {},
      "2015-11-07": {
        "number" : 2,
        "badgeClass":"badge-warning", 
        "dayEvents": [
        {"name":"soirée vide-jeux",
          "hour":"16:00"}
        ]
      },
      "2015-11-21": {},
      "2015-12-12": {
        "number" : 3,
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
