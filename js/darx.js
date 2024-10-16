function init() {
  var href = window.location.href;
  var hash = href.lastIndexOf("#");
  if (hash === -1) {
    showDefault();
  } else {
    var li = $("#" + href.slice(hash + 1));
    if (li.length === 1) {
      var link = li.children("a");
      if (link.length === 1) {
        link[0].click();
      } else {
        showDefault();
      }
    } else {
      showDefault();
    }
  }
}

function showDefault() {
  showPage("Home", null);
}

function showPage(page, elt) {
  lis = $("ul.nav-darx").children();
  lis.each(function (index) {
    var title = $(this).children().text();
    if (title === page) {
      $(lis[index]).attr("class", "active");
    } else {
      $(lis[index]).removeClass();
    }
  });
  $("#content").load(
    "pages/" + page.toLowerCase() + ".html",
    loadCallback(page)
  );
}

function loadCallback(page) {
  return function (responseText, textStatus, xhr) {
    postLoad(page);
  };
}

function postLoad(page) {
  if (page === "Contacts") {
    postLoadContacts();
  } else if (page === "LudiDARX") {
    postLoadLudidarx();
  }
}

function postLoadLudidarx() {
  // Email
  mailEl = mailTo("darxfantastiques", "hotmail", "fr", "contact DARX");
  $("#email_address").append(mailEl);
}

function postLoadContacts() {
  // Email
  mailEl = mailTo("darxfantastiques", "hotmail", "fr", "notre email");
  $("#email_address").append(mailEl);
}

function mailTo(dest, domain, ext, text) {
  return (
    '<a href="mailto:' + dest + "@" + domain + "." + ext + '">' + text + "</a>"
  );
}

function telNum(a, b, c, d, e) {
  return a + " " + b + " " + c + " " + d + " " + e;
}
