"use client";
import { useRouter, useParams } from "next/navigation";
import { questions } from "@/lib/quizData";
import { useQuiz } from "@/lib/quizContext";
import QuestionCard from "@/components/QuestionCard";
import CosmicButton from "@/components/CosmicButton";
import ProgressBar from "@/components/ProgressBar";
import DecryptedText from "@/components/DecryptedText";

export default function QuizStep() {
  const router = useRouter();
  const params = useParams<{ step: string }>();
  const idx = Math.max(1, Math.min(questions.length, Number(params.step || 1))) - 1;
  const q = questions[idx];
  const { answers, setAnswer, total } = useQuiz();
  const selected = answers[q.id];

  function goNext() {
    if (idx + 1 < questions.length) router.push(`/quiz/${idx + 2}`);
    else router.push(`/result`);
  }

  function onSelect(aId: string) {
    setAnswer(q.id, aId);
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">
      <ProgressBar value={idx} total={total} />
      <p className="text-silver">
        <DecryptedText text={`Stage ${idx + 1} of ${total}`} animateOn="view" encryptedClassName="text-sky-200/70" />
      </p>
      <QuestionCard prompt={q.prompt} options={q.options} selected={selected} onSelect={onSelect} />
      <div className="flex justify-end">
        <CosmicButton onClick={goNext} disabled={!selected}>
          <DecryptedText text="Next" animateOn="view" encryptedClassName="text-fuchsia-300/70" />
        </CosmicButton>
      </div>
    </div>
  );
}
