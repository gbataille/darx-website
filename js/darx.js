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
  mailEl = mailTo("darxfantastiques", "hotmail", "com", "contact DARX");
  $("#email_address").append(mailEl);

  // Telephone
  $("#tel_number").append(telNum("06","45","73","63","74"));
}

function postLoadMagic() {
  $(".magic-calendar").responsiveCalendar({
    time: $.datepicker.formatDate('yy-mm', new Date()),
    events: {
      "2015-01-02": {},
      "2015-01-09": {},
      "2015-01-16": {},
      "2015-01-23": {},
      "2015-01-30": {},
      "2015-02-06": {},
      "2015-02-13": {},
      "2015-02-20": {},
      "2015-02-27": {},
      "2015-03-06": {},
      "2015-03-13": {},
      "2015-03-20": {},
      "2015-03-27": {},
      "2015-04-03": {},
      "2015-04-10": {},
      "2015-04-17": {},
      "2015-04-24": {},
      "2015-05-01": {},
      "2015-05-08": {},
      "2015-05-15": {},
      "2015-05-22": {},
      "2015-05-29": {},
      "2015-06-05": {},
      "2015-06-12": {},
      "2015-06-19": {},
      "2015-06-26": {}
    }
  });
}

function postLoadContacts() {
  // Email
  mailEl = mailTo("darxfantastiques", "hotmail", "com", "notre email");
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
      "2014-12-13": {
        "number" : 1,
        "badgeClass":"badge-warning", 
        "dayEvents": [
        {"name":"journée continue",
          "hour":"09:00"}
        ]
      },
      "2015-01-10": {},
      "2015-01-24": {
        "number" : 1,
        "badgeClass":"badge-warning", 
        "dayEvents": [
        {"name":"Journée et soirée jeux à Saint Genis Pouilly, salle Jean Monnet",
          "hour":"09:00"}
        ]
      },
      "2015-01-25": {
        "number" : 1,
        "badgeClass":"badge-warning", 
        "dayEvents": [
        {"name":"Journée et soirée jeux à Saint Genis Pouilly, salle Jean Monnet",
          "hour":"09:00"}
        ]
      },
      "2015-02-07": {},
      "2015-02-21": {},
      "2015-03-07": {},
      "2015-03-21": {},
      "2015-04-11": {},
      "2015-04-25": {},
      "2015-05-09": {},
      "2015-05-20": {
        "number" : 1,
        "badgeClass":"badge-warning", 
        "dayEvents": [
        {"name":"Assemblée générale",
          "hour":"09:00"}
        ]
      },
      "2015-05-30": {},
      "2015-06-13": {},
      "2015-06-27": {
        "number" : 1,
        "badgeClass":"badge-warning", 
        "dayEvents": [
        {"name":"journée continue",
          "hour":"09:00"}
        ]
      },
      "2015-07-04": {
        "number" : 1,
        "badgeClass":"badge-warning", 
        "dayEvents": [
        {"name":"journée inventaire",
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
