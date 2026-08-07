(function () {
  "use strict";

  function getTarget(trigger) {
    var selector = trigger.getAttribute("data-target") || trigger.getAttribute("href");

    if (!selector || selector.charAt(0) !== "#") {
      return null;
    }

    return document.getElementById(selector.slice(1));
  }

  function setExpanded(trigger, expanded) {
    trigger.setAttribute("aria-expanded", String(expanded));
    trigger.classList.toggle("collapsed", !expanded);
  }

  function hideCollapse(element) {
    element.classList.remove("show");
    document.querySelectorAll('[data-target="#' + element.id + '"], [href="#' + element.id + '"]').forEach(function (trigger) {
      setExpanded(trigger, false);
    });
  }

  function toggleCollapse(trigger) {
    var target = getTarget(trigger);

    if (!target || !target.classList.contains("collapse")) {
      return;
    }

    var willShow = !target.classList.contains("show");
    var parentSelector = target.getAttribute("data-parent");

    if (willShow && parentSelector) {
      var parent = document.querySelector(parentSelector);
      if (parent) {
        parent.querySelectorAll(".collapse.show").forEach(function (openElement) {
          if (openElement !== target) {
            hideCollapse(openElement);
          }
        });
      }
    }

    target.classList.toggle("show", willShow);
    setExpanded(trigger, willShow);
  }

  document.addEventListener("click", function (event) {
    var collapseTrigger = event.target.closest('[data-toggle="collapse"]');

    if (collapseTrigger) {
      event.preventDefault();
      toggleCollapse(collapseTrigger);
      return;
    }

    var link = event.target.closest('a[href*="#"]');
    if (!link || link.target || link.origin !== window.location.origin || link.pathname !== window.location.pathname || !link.hash) {
      return;
    }

    var destination = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (!destination) {
      return;
    }

    event.preventDefault();
    destination.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", link.hash);
  });
}());
