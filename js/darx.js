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
}

function postLoadMagic() {
  $(".magic-calendar").responsiveCalendar({
    time: $.datepicker.formatDate('yy-mm', new Date()),
    translateMonths: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    activateNonCurrentMonths: true,
    events: {
      "2016-09-10": {},
      "2016-09-24": {},
      "2016-10-08": {},
      "2016-10-09": {},
      "2016-10-22": {},
      "2016-11-05": {},
      "2016-11-19": {},
      "2016-11-26": {},
      "2016-12-10": {},
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
  mailEl = mailTo("darxfantastiques", "hotmail", "fr", "darxfantastiques@hotmail.fr");
  $("#email_address").append(mailEl);

  // Journee Jeux
  $(".responsive-calendar").responsiveCalendar({
    time: $.datepicker.formatDate('yy-mm', new Date()),
    translateMonths: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    activateNonCurrentMonths: true,
    events: {
      "2017-09-09": {},
      "2017-09-23": {},
      "2017-10-07": {
        "number" : 0,
        "badgeClass":"badge-warning"
      },
      "2017-10-08": {
        "number" : 0,
        "badgeClass":"badge-warning"
      },
      "2017-10-21": {},
      "2017-10-28": {
        "number" : 1,
        "badgeClass":"badge-warning"
      },
      "2017-11-04": {},
      "2017-11-18": {
        "number" : 2,
        "badgeClass":"badge-warning"
      },
      "2017-12-02": {},
      "2017-12-16": {
        "number" : 3,
        "badgeClass":"badge-warning"
      },
    }
  });
};

function mailTo(dest, domain, ext, text) {
  return "<a href=\"mailto:" + dest + "@" + domain + "." + ext + "\">" + text + "</a>";
}

function telNum(a,b,c,d,e) {
  return a + " " + b + " " + c + " " + d + " " + e;
}
