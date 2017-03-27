(function ($) {
  $.fn.scrollFixed = function ($setting) {
    var scrollFixedItem = this

    // setting item
    var beginElement = $setting.begin
    var endElement = $setting.end
    var breakpoint = $setting.breakpoint
    var navElement = $setting.navElement
    var navTriggerElement = $setting.navTriggerElement
    navTriggerElement || (navTriggerElement = '.col-2')

    // select item
    var scrollFixedItemSelect = $(scrollFixedItem)
    var navTriggerElementSelect = $(navTriggerElement)

    // scrollFixedItem width for this parent width
    function parentWidth (breakpointNoWidth) {
      if (breakpoint) {
        if ($(window).innerWidth() > breakpoint) {
          return scrollFixedItemSelect.innerWidth()
        } else {
          if (breakpointNoWidth) {
            return 0
          } else {
            return $(window).innerWidth()
          }
        }
      } else {
        return scrollFixedItemSelect.innerWidth()
      }
    }
    // for coordinate(座標) Construction
    function Position (beginElement, endElement) {
      this.begin = $(beginElement).offset().top + $(beginElement).outerHeight()
      this.end = $(endElement).offset().top
    }

    // if/else coordinate(座標) event
    function coordinateEvent () {
      var scrollPosition = new Position(beginElement, endElement)

      if ($(window).scrollTop() > scrollPosition.begin && $(window).scrollTop() < scrollPosition.end - $(window).height()) {
        scrollFixedItemSelect.css({
          'position': 'fixed'
        })
      } else {
        scrollFixedItemSelect.css({
          'position': 'absolute'
        })
      }
      if ($(window).scrollTop() < scrollPosition.end - $(window).height()) {
        scrollFixedItemSelect.css({
          'top': '0',
          'bottom': 'auto'
        })
      } else {
        scrollFixedItemSelect.css({
          'top': 'auto',
          'bottom': '0'
        })
      }
    }

    // resize event
    function resizeEvent () {
      scrollFixedItemSelect.parent().css({
        'z-index': -500,
        'display': 'block',
        'width': function () {
          if (breakpoint) {
            return parentWidth(true)
          } else {
            return parentWidth()
          }
        }
      })
      scrollFixedItemSelect.css({
        'height': $(window).outerHeight(),
        'overflow-y': 'scroll'
      })
    }

    // nav click event
    function clickToggle () {
      // for responsive large breakpoint
      var toggleLg = {
        '$style': function () {
          scrollFixedItemSelect.parent().css({
            'transition': '0.5s'
          })
        },
        '$before': function () {
          scrollFixedItemSelect.parent().css({
            'width': 0
          })
        },
        '$after': function () {
          scrollFixedItemSelect.parent().css({
            'width': scrollFixedItem.innerWidth()
          })
        }
      }

      // for responsive sm breakpoint
      var toggleSm = {
        '$style': function () {
          navTriggerElementSelect.css({
            'position': 'relative',
            'left': 0,
            'transition': '0.5s'
          })
        },
        '$before': function () {
          navTriggerElementSelect.css({
            'left': scrollFixedItem.innerWidth()
          })
        },
        '$after': function () {
          navTriggerElementSelect.css({
            'left': 0
          })
        }
      }
      // start up toggle event
      if (breakpoint) {
        toggleLg.$style()
        toggleSm.$style()
        $(navElement).toggle(function () {
          if ($(window).width() > breakpoint) {
            toggleLg.$before()
          } else {
            toggleSm.$before()
          }

          // prevent firefox scroll to bottom change height
          setTimeout(function () {
            coordinateEvent()
          }, 80)
        }, function () {
          if ($(window).width() > breakpoint) {
            toggleLg.$after()
          } else {
            toggleSm.$after()
          }

          // prevent firefox scroll to bottom change height
          setTimeout(function () {
            coordinateEvent()
          }, 80)
        })
      } else {
        toggleLg.$style()
        $(navElement).toggle(function () {
          toggleLg.$before()
        }, function () {
          toggleLg.$after()
        })
      }
    }
    // set up function
    $(document).ready(function () {
      clickToggle()
      resizeEvent()
      coordinateEvent()
    })

    $(window).resize(function () {
      resizeEvent()
      clickToggle()
    })
    $(window).scroll(function () {
      coordinateEvent()
    })
  }
})(jQuery)
