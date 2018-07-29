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
      "2018-09-08": {},
      "2018-09-22": {},
      "2018-10-06": {
        "number" : 1,
        "badgeClass":"badge-warning"
      },
      "2018-10-07": {
        "number" : 1,
        "badgeClass":"badge-warning"
      },
      "2018-10-20": {},
      "2018-10-27": {
        "number" : 2,
        "badgeClass":"badge-warning"
      },
      "2018-11-10": {},
      "2018-11-24": {},
      "2018-12-08": {
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
