function _(id) {
   var about = {
      Version: 0.1,
      Author: "Enoch Ko",
      Created: "Monday, April 18th 2016",
      Updated: "Monday, April 18th 2016"
   };
 
   if (id) {
      if (window === this) {
         return new _(id);
      }
      this.e = document.getElementById(id);
      return this;
   } else {
      return about;
   }
};
 
_.prototype = {
   hide: function () {
      this.e.style.display = 'none';
      return this;
   },
 
   show: function () {
      this.e.style.display = 'inherit';
      return this;
   },
 
   background_color: function (color) {
      this.e.style.background = color;
      return this;
   },
 
   val: function (newval) {
      this.e.value = newval;
      return this;
   },
 
   toggle: function () {
      if (this.e.style.display !== 'none') {
         this.e.style.display = 'none';
      } else {
         this.e.style.display = '';
      }
      return this;
   },
 
   size: function (height, width) {
      this.e.style.height = height + 'px';
      this.e.style.width = width + 'px';
      return this;
   }
};