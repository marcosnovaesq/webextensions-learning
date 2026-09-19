// Reusable retrieval-practice quiz widget for lessons.
//
// Markup contract:
// <div class="quiz-set">
//   <div class="quiz" data-answer="b" data-feedback-correct="..." data-feedback-incorrect="...">
//     <p class="quiz-prompt">Question text?</p>
//     <ul class="quiz-options">
//       <li><button class="quiz-option" data-choice="a">Option A</button></li>
//       <li><button class="quiz-option" data-choice="b">Option B</button></li>
//     </ul>
//     <p class="quiz-feedback" aria-live="polite"></p>
//   </div>
//   ... more .quiz blocks ...
//   <p class="quiz-score"></p>
// </div>
//
// Behavior: one attempt per question. Clicking an option locks that
// question, reveals the correct answer, and shows feedback text. A
// running score renders in .quiz-score once every question in the set
// has been answered.

(function () {
  function initQuizSet(set) {
    const quizzes = Array.from(set.querySelectorAll(".quiz"));
    const scoreEl = set.querySelector(".quiz-score");
    const results = new Map();

    quizzes.forEach((quiz, i) => {
      const progress = quiz.querySelector(".quiz-progress");
      if (progress) progress.textContent = `Question ${i + 1} of ${quizzes.length}`;

      const answer = quiz.dataset.answer;
      const feedbackEl = quiz.querySelector(".quiz-feedback");
      const options = Array.from(quiz.querySelectorAll(".quiz-option"));

      options.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (quiz.dataset.answered === "true") return;
          quiz.dataset.answered = "true";

          const isCorrect = btn.dataset.choice === answer;
          results.set(quiz, isCorrect);

          options.forEach((opt) => {
            opt.disabled = true;
            if (opt.dataset.choice === answer) opt.classList.add("correct");
            else if (opt === btn) opt.classList.add("incorrect");
          });

          if (feedbackEl) {
            feedbackEl.textContent = isCorrect
              ? quiz.dataset.feedbackCorrect || "Correct."
              : quiz.dataset.feedbackIncorrect || "Not quite — correct answer highlighted above.";
            feedbackEl.classList.add(isCorrect ? "correct" : "incorrect");
          }

          if (scoreEl && results.size === quizzes.length) {
            const right = Array.from(results.values()).filter(Boolean).length;
            scoreEl.textContent = `Score: ${right} / ${quizzes.length}`;
          }
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".quiz-set").forEach(initQuizSet);
  });
})();
