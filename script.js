//Vue instance
new Vue({
	el: "#app",
	data: {
		//HTML Object Contains HTML Lessons Text Which Will Be Used To Display
		html: {
			lesson1: `fasfas`,
			lesson2: `adfasdf`,
			lesson3: `sfasfasf`,
			lesson4: `asdfasdf`,
			lesson5: `adsfasdfasdf`
		},
		//dC property is used to display html, css or JS contents
		dC: ``,
		left: "-100%"
	}, 
	methods: {
		//ShowHTML Function Shows HTML Lesson Content
		showHTML: function(lesson) {
			if(lesson === "lesson1") {
				this.dC = this.html.lesson1;	
			} else if(lesson === "lesson2") {
				this.dC = this.html.lesson2;	
			} else if(lesson === "lesson3") {
				this.dC = this.html.lesson3;	
			} else if(lesson === "lesson4") {
				this.dC = this.html.lesson4;	
			} else if(lesson === "lesson5") {
				this.dC = this.html.lesson5;	
			}
			this.left = "-100%";
		},
		//ShowHTML Function Shows CSS Lesson Content
		showCSS: function(lesson) {
			if(lesson === "lesson1") {
				this.dC = this.html.lesson1;	
			} else if(lesson === "lesson2") {
				this.dC = this.html.lesson2;	
			} else if(lesson === "lesson3") {
				this.dC = this.html.lesson3;	
			} else if(lesson === "lesson4") {
				this.dC = this.html.lesson4;	
			} else if(lesson === "lesson5") {
				this.dC = this.html.lesson5;	
			}
			this.left = "-100%";
		},
		//ShowHTML Function Shows JS Lesson Content
		showJS: function(lesson) {
			if(lesson === "lesson1") {
				this.dC = this.html.lesson1;	
			} else if(lesson === "lesson2") {
				this.dC = this.html.lesson2;	
			} else if(lesson === "lesson3") {
				this.dC = this.html.lesson3;	
			} else if(lesson === "lesson4") {
				this.dC = this.html.lesson4;	
			} else if(lesson === "lesson5") {
				this.dC = this.html.lesson5;	
			}
			this.left = "-100%";
		},
		//showSideNav function opens the sidenav
		showSideNav: function() {
			this.left = "0";
		},
		//closeSideNav function closes the sidenav
		closeSideNav: function() {
			this.left = "-100%";
		}
	}
})