const question = document.getElementsByClassName("asked");
let i;


// fonction collapse reponses FAQ

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}





