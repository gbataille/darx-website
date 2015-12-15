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
      "2015-12-11": {},
      "2015-12-18": {},
      "2016-01-08": {},
      "2016-01-15": {},
      "2016-01-22": {},
      "2016-01-29": {},
      "2016-02-05": {},
      "2016-02-12": {},
      "2016-02-19": {},
      "2016-02-26": {},
      "2016-03-04": {},
      "2016-03-11": {},
      "2016-03-18": {},
      "2016-03-25": {},
      "2016-04-01": {},
      "2016-04-08": {},
      "2016-04-15": {},
      "2016-04-22": {},
      "2016-04-29": {},
      "2016-05-06": {},
      "2016-05-13": {},
      "2016-05-20": {},
      "2016-05-27": {},
      "2016-06-03": {},
      "2016-06-10": {},
      "2016-06-17": {},
      "2016-06-24": {}
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
      "2016-01-16": {},
      "2016-01-30": {},
      "2016-02-13": {},
      "2016-02-27": {},
      "2016-03-12": {},
      "2016-03-26": {},
      "2016-04-09": {},
      "2016-04-23": {},
      "2016-05-14": {},
      "2016-05-18": {
        "number" : 0,
        "badgeClass":"badge-warning"
      },
      "2016-05-21": {
        "number" : 1,
        "badgeClass":"badge-warning"
      },
      "2016-05-22": {
        "number" : 1,
        "badgeClass":"badge-warning"
      },
      "2016-05-28": {},
      "2016-06-11": {},
      "2016-06-25": {
        "number" : 2,
        "badgeClass":"badge-warning"
      },
      "2016-07-02": {
        "number" : 3,
        "badgeClass":"badge-warning"
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
