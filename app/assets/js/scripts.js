/*!
 * mif
 * Mission Increase Foundation - The Gathering landing page.
 * http://fiveq.com
 * @author Five Q
 * @version 1.0
 * Copyright 2015. MIT licensed.
 */
(function (window, document, undefined) {

  'use strict';

  (function () {
    var mobileTrigger  = document.querySelector('.js-nav-toggle'),
        mobileNav      = document.querySelector('.js-nav'),
        inputs         = document.querySelectorAll('.input'),
        inputOnClass   = "is-active",
        inputShowClass = "is-visible";

    mobileTrigger.addEventListener("click", function() {
      mobileNav.classList.toggle('is-visible');
    });

    function toggleInputs(ele) {
      var label = ele.previousSibling;

      if (ele.value !== "") {
        label.classList.add(inputShowClass);
      } else {
        label.classList.remove(inputShowClass);
      }
    }

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("keyup", function() {
        toggleInputs(this);
      });

      inputs[i].addEventListener("focus", function() {
        var label = this.previousSibling;
        console.log(label);
        console.log(this);
        label.classList.add(inputOnClass);
      });

      inputs[i].addEventListener("blur", function() {
        var label = this.previousSibling;
        label.classList.remove(inputOnClass);
      });

      toggleInputs(inputs[i]);
    }

  })();

})(window, document);
