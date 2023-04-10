
const quizData = [
  {
    question: 'Gece gündüz eşitliği (ekinoks) bir yılda kaç kez gerçekleşir?',
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    e: '5',
    correct: 'answerb',
  },
  {
    question: 'Nobel ödülleri hangi ülkede verilmektedir? ',
    a: 'İsveç',
    b: 'İsviçre',
    c: 'Norveç',
    d: 'Finlandiya',
    e: 'Danimarka',
    correct: 'answera',
  },
  {
    question: 'Türkiye’nin uluslararası otomatik telefon kod numarası kaçtır?',
    a: '60',
    b: '70',
    c: '80',
    d: '90',
    e: '100',
    correct: 'answerd',
  },
  {
    question: 'Cumhurbaşkanı kaç yılda bir seçilir?',
    a: '3',
    b: '4',
    c: '5',
    d: '6',
    e: '7',
    correct: 'answerc',
  },
  {
    question: ' 2007 yılında Avrupa Birliğine giren ülkeler hangileridir ?',
    a: 'Bulgaristan – Macaristan',
    b: 'Macaristan – Romanya',
    c: 'Bulgaristan – Sırbistan',
    d: 'Macaristan – Sırbistan',
    e: 'Bulgaristan – Romanya',
    correct: 'answere',
  },
]





const answerA = document.getElementById("answera")
const answerB = document.getElementById("answerb")
const answerC = document.getElementById("answerc")
const answerD = document.getElementById("answerd")
const answerE = document.getElementById("answere")
const answer = document.querySelectorAll(".answer")

const question = document.getElementById("question")
const labelA = document.getElementById("labela")
const labelB = document.getElementById("labelb")
const labelC = document.getElementById("labelc")
const labelD = document.getElementById("labeld")
const labelE = document.getElementById("labele")

const submit = document.getElementById("answer-box")

var submitAnswer
var correctAnswer

answer.forEach((i) => {
  i.addEventListener("click", () => {
    answer.forEach((j) => {
      j.checked = false
    })
    i.checked = true
    submitAnswer = i.id
  })
});


function loadQuiz(i) {
  question.innerText = quizData[i].question
  labelA.innerText = quizData[i].a
  labelB.innerText = quizData[i].b
  labelC.innerText = quizData[i].c
  labelD.innerText = quizData[i].d
  labelE.innerText = quizData[i].e
  correctAnswer = quizData[i].correct
  answer.forEach((i)=>{
    i.checked=false
  })
}

loadQuiz(0)
var q = 0
var c = 0

submit.addEventListener("click", () => {
  c += 1
  if (c == 1) {
    submit.style.backgroundColor = "#f8ea7d"
    submit.innerText = "Eminim,Son kararım"
    return
  }


  if (submitAnswer == correctAnswer && c == 2) {
    q += 1
    if (q == 5) {
      submit.innerText = "kazandınız"
      q = 0
      return
    }
    submit.style.backgroundColor = "#a8c82f"
    submit.innerText = "Doğru cevap. Sonraki soruya geçiniz"
    return
  }
  if (submitAnswer != correctAnswer && c == 2) {
    submit.style.backgroundColor = "#a93d31"
    submit.innerText = "Yanlış Cevap. Tekrar deneyin"
    c = 0
    return
  }
  c = 0
  submit.style.backgroundColor = "#376baf"
  loadQuiz(q)
})



