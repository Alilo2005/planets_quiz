"use client";
import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { questions } from "./quizData";
import type { PlanetId } from "./types";

type AnswerMap = Record<string, string | undefined>; // questionId -> answerId

interface QuizContextShape {
  step: number;
  total: number;
  answers: AnswerMap;
  setAnswer: (qId: string, aId: string) => void;
  scores: Partial<Record<PlanetId, number>>;
  reset: () => void;
}

const QuizContext = createContext<QuizContextShape | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<AnswerMap>({});
  const step = Object.keys(answers).length; // answered count
  const total = questions.length;

  const scores = useMemo(() => {
    const s: Partial<Record<PlanetId, number>> = {};
    for (const q of questions) {
      const aId = answers[q.id];
      if (!aId) continue;
      const opt = q.options.find((o) => o.id === aId);
      if (!opt) continue;
      for (const [pid, w] of Object.entries(opt.weights)) {
        const key = pid as PlanetId;
        s[key] = (s[key] ?? 0) + (w ?? 0);
      }
    }
    return s;
  }, [answers]);

  const value: QuizContextShape = {
    step,
    total,
    answers,
    setAnswer: (qId, aId) => setAnswers((prev) => ({ ...prev, [qId]: aId })),
    scores,
    reset: () => setAnswers({}),
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used within QuizProvider");
  return ctx;
}
