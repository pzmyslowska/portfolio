const navbar = document.querySelector('.navbar')

//Navbar animation
window.addEventListener('scroll', () => {
    if(this.scrollY > 0) {
        navbar.classList.remove('py-4')
        navbar.classList.add('shadow', 'py2')
    }
    else {
        navbar.classList.add('py-4')
        navbar.classList.remove('shadow', 'py2')
    }
})

//Animate on scroll
AOS.init({
    duration: 500
});

//Calculator
function calculate() {
    let sum = 0;
    var firstValue = document.getElementById("firstNumber").value;
    var secondValue = document.getElementById("secondNumber").value;
    var thirdValue = document.getElementById("thirdNumber").value;
    var fourthValue = document.getElementById("fourthNumber").value;
    sum = firstValue*100 + secondValue*80 + thirdValue*85 + fourthValue*75;
    document.getElementById("result").value = sum;   
}

//Pop-up
function show_modal(){
    document.querySelector('.modal').style.display="flex";
  }
  function close_modal(){
    document.querySelector('.modal').style.display='none';
  }
