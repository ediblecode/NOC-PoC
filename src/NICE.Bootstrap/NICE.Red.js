export var Red = function (element, options) {
    this.$element = $(element);
    this.options = options;
}

Red.prototype = {
    load: function() {
        console.log("red load", this.$element);
      this.$element.css({ color: "red" });
    }
};


/* PLUGIN DEFINITION
* ======================== */

var red = $.fn.red

$.fn.red = function (option) {
    return this.each(function () {
        var $this = $(this)
          , data = $this.data('red')
          , options = $.extend({}, $.fn.red.defaults, $this.data(), options);

        if (!data) $this.data('red', (data = new Red(this, options)));

        data.load();
    })
}

$.fn.red.defaults = {
}

$.fn.red.Constructor = Red;


/* NO CONFLICT
* ================== */

$.fn.red.noConflict = function () {
    $.fn.red = old;

    return this;
}


/* DATA-API
* =============== */

function setup() {
    $('[data-red]')
        .each(function() {
            $(this).red();
        });
}

$(() => {
    setup();
})