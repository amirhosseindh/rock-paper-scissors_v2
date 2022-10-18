let yourRock = document.querySelector(".your_rockShow");
let yourPaper = document.querySelector(".your_paperShow");
let yourScissors = document.querySelector(".your_scissorsShow");
let systemRock = document.querySelector(".system_rockShow");
let systemPaper = document.querySelector(".system_paperShow");
let systemScissors = document.querySelector(".system_scissorsShow");
function rockClick() {
	const game = ["قیچی", "کاغذ", "سنگ"];
	const random = Math.floor(Math.random() * game.length);
	yourRock.style.transform = "translateX(0)";
	yourRock.style.transition = ".5s";
	yourPaper.style.transform = "translateX(-130%)";
	yourScissors.style.transform = "translateX(-130%)";
	if (game[random] == "سنگ") {
		systemRock.style.transform = "translateX(0)";
		systemRock.style.transition = ".5s";
		systemPaper.style.transform = "translateX(-130%)";
		systemScissors.style.transform = "translateX(-130%)";
	} else if (game[random] == "کاغذ") {
		systemPaper.style.transform = "translateX(0)";
		systemPaper.style.transition = ".5s";
		systemRock.style.transform = "translateX(-130%)";
		systemScissors.style.transform = "translateX(-130%)";
	} else {
		systemScissors.style.transform = "translateX(0)";
		systemScissors.style.transition = ".5s";
		systemRock.style.transform = "translateX(-130%)";
		systemPaper.style.transform = "translateX(-130%)";
	}
}
function paperClick() {
	const game = ["قیچی", "کاغذ", "سنگ"];
	const random = Math.floor(Math.random() * game.length);
	yourPaper.style.transform = "translateX(0)";
	yourPaper.style.transition = ".5s";
	yourRock.style.transform = "translateX(-130%)";
	yourScissors.style.transform = "translateX(-130%)";
	if (game[random] == "سنگ") {
		systemRock.style.transform = "translateX(0)";
		systemRock.style.transition = ".5s";
		systemPaper.style.transform = "translateX(-130%)";
		systemScissors.style.transform = "translateX(-130%)";
	} else if (game[random] == "کاغذ") {
		systemPaper.style.transform = "translateX(0)";
		systemPaper.style.transition = ".5s";
		systemRock.style.transform = "translateX(-130%)";
		systemScissors.style.transform = "translateX(-130%)";
	} else {
		systemScissors.style.transform = "translateX(0)";
		systemScissors.style.transition = ".5s";
		systemRock.style.transform = "translateX(-130%)";
		systemPaper.style.transform = "translateX(-130%)";
	}
}
function scissorsClick() {
	const game = ["قیچی", "کاغذ", "سنگ"];
	const random = Math.floor(Math.random() * game.length);
	yourScissors.style.transform = "translateX(0)";
	yourScissors.style.transition = ".5s";
	yourRock.style.transform = "translateX(-130%)";
	yourPaper.style.transform = "translateX(-130%)";
	if (game[random] == "سنگ") {
		systemRock.style.transform = "translateX(0)";
		systemRock.style.transition = ".5s";
		systemPaper.style.transform = "translateX(-130%)";
		systemScissors.style.transform = "translateX(-130%)";
	} else if (game[random] == "کاغذ") {
		systemPaper.style.transform = "translateX(0)";
		systemPaper.style.transition = ".5s";
		systemRock.style.transform = "translateX(-130%)";
		systemScissors.style.transform = "translateX(-130%)";
	} else {
		systemScissors.style.transform = "translateX(0)";
		systemScissors.style.transition = ".5s";
		systemRock.style.transform = "translateX(-130%)";
		systemPaper.style.transform = "translateX(-130%)";
	}
}
