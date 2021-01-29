/**
 * jQuery selectAutocomplete plugin
 *
 * Author:       Arthur Mironov
 * Created:      July 5th 2016
 * Last Updated: July 7th 2016
 * Version:      1.0.1
 * Licence:      Autocomplete is licenced under MIT licence (http://opensource.org/licenses/MIT)
 * GitHub:       https://github.com/art-mironoff/jQuery-selectAutocomplete
 */


if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}

(function ($, window, document, undefined) {
    "use strict";

    var SelectAutocomplete = {
        $input: null,
        $wrap: null,
        $dropdown: null,
        $ul: null,
        $button: null,

        KEYS: {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            ESC: 27,
            ENTER: 13,
            TAB: 9
        },

        init: function( options, elem ) {
            this.config = $.extend({}, $.fn.selectAutocomplete.defaults, options);

            this.$input = $(elem);
            var wrapper = $("<div/>", { attr: this.config.wrapperAttrs });
            this.$wrap = this.$input.wrap(wrapper).parent();
            var dropdown = $("<div/>", { attr: this.config.dropdownAttrs });
            this.$dropdown = this.$wrap.append(dropdown).children('div');
            this.$ul = this.$dropdown.append("<ul/>").children("ul");
            if (this.config.showCancelButton) {
                var button = $("<button/>", {
                    text: this.config.cancelButtonText
                });
                this.$button = this.$dropdown.append(button).children('button');
            }

            this.updateDropdown("");

            //events
            this.$input.on({
              "keydown.selectAutocomplete": this.onKeydown.bind(this),
              "keyup.selectAutocomplete": this.onKeyup.bind(this)
            });
            this.$ul.on("click", "li", this.onListClick.bind(this));
            this.$button.on("click", this.onCancelClick.bind(this));
        },

        updateDropdown: function(searchString) {
            var data = this.config.data,
                html = "";
            for (var i = 0, len = data.length; i < len; i++) {
                if (new RegExp(searchString.toLowerCase()).test(data[i].toLowerCase())) {
                    html += "<li data-id='" + data[i] + "'>" + data[i] + "</li>";
                }
            }
            this.$ul.html(html);
        },

        onKeydown: function(e) {
            var $next, $selected;
            if ((e.which == this.KEYS.DOWN || e.which == this.KEYS.UP) && this.$ul.html()) {
                $selected = $("li.selected", this.$ul);
                if (!$selected.length) {
                    $next = (e.which == this.KEYS.DOWN) ? $("li", this.$ul).first() : $("li", this.$ul).last();
                    this.$input.val($next.addClass("selected").text());
                } else {
                    $next = (e.which == this.KEYS.DOWN) ? $selected.next("li") : $selected.prev("li");
                    if ($next.length) {
                        this.$input.val($next.addClass("selected").text());
                    } else {
                        this.$input.val("");
                    }
                    $selected.removeClass("selected");
                }
            } else if (e.which == this.KEYS.ESC) {
                this.$input.val("");
            } else if (e.which == this.KEYS.ENTER || e.which == this.KEYS.TAB) {
                $selected = $("li.selected", this.$ul);
                if ($selected.length) {
                    this.updateDropdown($selected.text());
                    this.config.onSelect(e, $selected.data('id'), $selected.text());
                }
            }
        },

        onKeyup: function(e) {
            if (!~$.inArray(e.which, [
                this.KEYS.LEFT,
                this.KEYS.UP,
                this.KEYS.RIGHT,
                this.KEYS.DOWN,
                this.KEYS.ENTER,
                this.KEYS.ESC,
                this.KEYS.TAB
            ])) {
                var inputVal = this.$input.val();
                if (inputVal.length < this.config.minLength) {
                    this.updateDropdown("");
                } else {
                    this.updateDropdown(inputVal);
                }
            }
        },

        onListClick: function(e) {
            $("li.selected", this.$ul).removeClass("selected");
            var $element = $(e.target).addClass("selected");
            var id = $element.data('id');
            var value = $element.text();
            this.$input.val(value);
            this.config.onSelect(e, id, value);
        },

        onCancelClick: function(e) {
            this.$input.val("");
            this.updateDropdown("");
            this.config.onCancel(e);
        }
    };

    $.fn.selectAutocomplete = function (options) {
        return this.each(function () {
            //Destroy method
            if (options === "destroy") {
                $("div", $(this).parent()).remove();
                $(this).unwrap().off('keydown.selectAutocomplete keyup.selectAutocomplete');
                return;
            }

            var selectAutocomplete = Object.create( SelectAutocomplete );
            selectAutocomplete.init( options, this );
        });
    };

    $.fn.selectAutocomplete.defaults = {
        cancelButtonText: "Remove",
        data: [],
        dropdownAttrs: {
            class: "dropdown"
        },
        minLength: 3,
        onSelect: function (e, id, name) {
        },
        onCancel: function (e) {
        },
        showCancelButton: false,
        wrapperAttrs: {
            class: "select-autocomplete"
        }
    };

}(jQuery));