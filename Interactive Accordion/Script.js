let questions = document.querySelectorAll('.faq-questions')
console.log(questions)
questions.forEach(function(question){
    question.addEventListener("click",function(){
        const answerElement = this.nextElementSibling;
        answerElement.classList.toggle("hidden");
    })
})