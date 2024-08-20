function displayMenu(){
    document.getElementById("onMobile").style.display = "flex"
    document.getElementById("dsiplayMenu").style.display = "none"
}

function removeMenu(){
    document.getElementById("onMobile").style.display = "none"
};

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
}

