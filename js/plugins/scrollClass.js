(function ($) {
  $.fn.scrollClass = function ($setting) {
    var fnSelect = this

    // prevent setting object undefind
    $setting || ($setting = {})

    // setting item
    var className = $setting.className
    var delay = $setting.delay

    // default setting
    delay || (delay = 0)

    // global variable

    function srollClassEvent () {
      var timer = 1
      fnSelect.each(function (index) {
        var eachSelect = $(this)
        var scrollPosition = eachSelect.offset().top

        if ($(window).scrollTop() > scrollPosition - $(window).height() && $(window).scrollTop() < scrollPosition + eachSelect.innerHeight()) {
          setTimeout(function () {
            eachSelect.addClass(className)
          }, delay * timer++)
        } else if ($(window).scrollTop() > scrollPosition - $(window).height()) {
          setTimeout(function () {
            eachSelect.addClass(className)
          }, delay)
        }
      })
    }
    // set up function
    $(document).ready(function () {
      srollClassEvent()
    })

    $(window).scroll(function () {
      srollClassEvent()
    })
  }
})(jQuery)
