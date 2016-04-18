function _(id) {
   var about = {
      Version: 0.11,
      Author: "Enoch Ko",
      Created: "Monday, April 18th 2016",
      Updated: "Monday, April 18th 2016"
   };
 
   if (id) {
      if (window === this) {
         return new _(id);
      }
      this.e = document.getElementById(id);
      this.s = this.e.style;
      return this;
   } else {
      return about;
   }
};
 
_.prototype = {
	color: function(color){
		this.s.color = color;
		return this;
	},
	hide: function(){
		this.s.display = 'none';
		return this;
	}
	show: function(){
		this.s.display = 'inherit';
		return this;
	},
	bgcolor: function (color) {
      this.s.background = color;
      return this;
    },
 
    val: function (newval) {
      this.e.value = newval;
      return this;
    },
    showtoggle: function () {
       if (this.e.style.display !== 'none') {
          this.s.display = 'none';
       } else {
          this.s.display = '';
       }
       return this;
    },
 
    resize: function (height, width) {
       this.s.height = height + 'px';
       this.s.width = width + 'px';
       return this;
    }
};