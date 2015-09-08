(function (window, document, undefined) {

  'use strict';

  function getDomNodeArray(domNodeList) {
    var arrayFromNodeList = [];

    for (var k = 0; k < domNodeList.length; k++) {
      arrayFromNodeList.push(domNodeList[k]);
    }

    return arrayFromNodeList;
  }

  (function () {
    var mobileTrigger  = document.querySelector('.js-nav-toggle'),
        mobileNav      = document.querySelector('.js-nav'),
        inputs         = document.querySelectorAll('.input'),
        inputArr       = getDomNodeArray(inputs),
        inputOnClass   = 'is-active',
        inputShowClass = 'is-visible';

    mobileTrigger.addEventListener('click', function() {
      mobileNav.classList.toggle('is-visible');
    });

    function toggleInputs() {
      var label = this.previousSibling;

      if (this.value !== '') {
        label.classList.add(inputShowClass);
      } else {
        label.classList.remove(inputShowClass);
      }
    }

    function toggleLabelClass(event) {
      var label = this.previousSibling;
      if (event.type === 'focus') {
        label.classList.add(inputOnClass);
      } else {
        label.classList.remove(inputOnClass);
      }
    }

    for (var i = 0; i < inputArr.length; i++) {
      inputArr[i].addEventListener('keyup', toggleInputs, false);

      inputArr[i].addEventListener('focus', toggleLabelClass, false);

      inputArr[i].addEventListener('blur', toggleLabelClass, false);
    }

  })();

})(window, document);


(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    var $links      = $('.js-nav a'),
        $mobileNav  = $('.js-nav');

    $links.each(function() {
      $(this).on('click', function(e) {
        $('html, body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 500);
        $mobileNav.removeClass('is-visible');
        e.preventDefault();
      });
    });

  });

})(jQuery, window, document);