"use client";

import { useState } from "react";

const initialTasks = [
  {
    id: 1,
    title: "Sword Control",
    description: "Practise precise anti-magic sword movements.",
    priority: "High",
  },
  {
    id: 2,
    title: "Physical Endurance",
    description: "Complete a focused strength and stamina session.",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Team Coordination",
    description: "Review a preparation plan with the Black Bulls.",
    priority: "High",
  },
];

export default function Home() {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const completedCount = completedTasks.length;
  const totalTasks = initialTasks.length;
  const incompleteCount = totalTasks - completedCount;
  const progress = Math.round((completedCount / totalTasks) * 100);

  function toggleTask(id: number) {
    setCompletedTasks((current) =>
      current.includes(id)
        ? current.filter((taskId) => taskId !== id)
        : [...current, id]
    );
  }

  return (
    <main className="min-h-screen bg-[#09090f] px-4 py-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 border-b border-purple-900/60 pb-7">
          <p className="mb-3 inline-block rounded-full border border-purple-400/50 bg-purple-500/15 px-3 py-1 text-xs font-semibold tracking-widest text-purple-200">
            CLOVER KINGDOM · ANTI-MAGIC PROTOCOL
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Asta&apos;s Preparation Dashboard
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
                Strategic battle preparation and readiness metrics to confront
                Lucifero, the King of Devils.
              </p>
            </div>

            <div className="rounded-xl border border-purple-700/70 bg-[#151321] p-4 md:min-w-52">
              <p className="text-xs tracking-widest text-gray-400">
                PRIMARY TARGET
              </p>
              <p className="mt-1 font-semibold text-purple-200">
                ✦ Supreme Devil Lucifero
              </p>
            </div>
          </div>
        </header>

        <section
          aria-labelledby="threat-title"
          className="mb-6 rounded-2xl border border-purple-800/80 bg-gradient-to-br from-[#171525] to-[#101019] p-5 sm:p-7"
        >
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-red-400/60 bg-red-500/15 px-2 py-1 text-xs font-bold text-red-200">
              CRITICAL THREAT
            </span>
            <span className="text-sm text-gray-300">
              • Gravity Magic Entity
            </span>
          </div>

          <h2 id="threat-title" className="text-xl font-bold">
            Threat Briefing: Lucifero
          </h2>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-gray-200">
            Lucifero commands overwhelming Gravity Magic. Preparation focuses
            on precise sword control, physical endurance, and coordination
            with the Black Bulls. Every completed task represents progress
            toward readiness.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
              <p className="text-xs text-gray-400">THREAT ATTRIBUTE</p>
              <p className="mt-1 font-semibold">Absolute Gravity</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
              <p className="text-xs text-gray-400">PREPARATION FOCUS</p>
              <p className="mt-1 font-semibold">Devil Union Anti-Magic</p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="progress-title"
          className="mb-8 rounded-2xl border border-purple-700/70 bg-[#12111d] p-5 sm:p-7"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 id="progress-title" className="text-xl font-bold">
                Preparation Progress
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                Track tactical milestones completed prior to engagement.
              </p>
            </div>

            <div className="rounded-lg border border-purple-400/70 bg-purple-500/20 px-4 py-2 text-2xl font-bold text-purple-200">
              {progress}%
            </div>
          </div>

          <p className="mt-5 text-sm font-medium text-gray-200" aria-live="polite">
            {completedCount} of {totalTasks} tasks completed
          </p>

          <div
            className="mt-3 h-4 overflow-hidden rounded-full border border-purple-400/50 bg-gray-800"
            role="progressbar"
            aria-label="Preparation progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-300 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm">
            <span className="text-gray-300">
              Status:{" "}
              <span className="font-semibold text-purple-200">
                {completedCount === totalTasks
                  ? "Complete"
                  : completedCount === 0
                    ? "Incomplete"
                    : "In Progress"}
              </span>
            </span>
            <span className="text-xs text-gray-400">
              Preparation progress, not victory probability.
            </span>
          </div>
        </section>

        <section aria-labelledby="tasks-title" className="mb-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 id="tasks-title" className="text-xl font-bold">
              Preparation Objectives
              <span className="ml-2 rounded-full bg-purple-500/20 px-2 py-1 text-xs text-purple-200">
                {totalTasks} Tasks
              </span>
            </h2>
            <p className="text-sm text-gray-300">
              Select a control to update task status.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {initialTasks.map((task) => {
              const isCompleted = completedTasks.includes(task.id);

              return (
                <article
                  key={task.id}
                  className={`flex flex-col rounded-2xl border p-5 transition-colors ${
                    isCompleted
                      ? "border-emerald-400/70 bg-[#12201d]"
                      : "border-gray-700 bg-[#111117] hover:border-purple-600/80"
                  }`}
                >
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`rounded-md border px-2 py-1 text-xs font-bold ${
                        task.priority === "High"
                          ? "border-rose-400/50 bg-rose-500/15 text-rose-200"
                          : "border-amber-300/50 bg-amber-500/15 text-amber-100"
                      }`}
                    >
                      PRIORITY: {task.priority.toUpperCase()}
                    </span>

                    <span
                      className={`text-xs font-semibold ${
                        isCompleted ? "text-emerald-300" : "text-gray-300"
                      }`}
                    >
                      {isCompleted ? "✓ Complete" : "Incomplete"}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold ${
                      isCompleted ? "text-emerald-200 line-through" : ""
                    }`}
                  >
                    {task.title}
                  </h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-gray-300">
                    {task.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => toggleTask(task.id)}
                    aria-pressed={isCompleted}
                    className="mt-5 min-h-11 w-full rounded-lg border border-purple-500/70 bg-purple-500/15 px-4 py-3 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                  >
                    {isCompleted ? "Undo Completion" : "Mark Complete"}
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section
          aria-labelledby="summary-title"
          className="mb-8 rounded-2xl border border-purple-700/70 bg-[#12111d] p-5 sm:p-7"
        >
          <h2 id="summary-title" className="text-xl font-bold">
            Task Summary Table
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Review each preparation objective, its priority, and current status.
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-gray-700">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead className="bg-purple-500/20 text-purple-100">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Task</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Priority</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {initialTasks.map((task) => {
                  const isCompleted = completedTasks.includes(task.id);

                  return (
                    <tr key={task.id} className="border-t border-gray-700">
                      <td className="px-4 py-3 font-medium text-gray-100">
                        {task.title}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={
                            task.priority === "High"
                              ? "font-semibold text-rose-200"
                              : "font-semibold text-amber-100"
                          }
                        >
                          {task.priority}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={
                            isCompleted
                              ? "font-semibold text-emerald-300"
                              : "font-semibold text-gray-300"
                          }
                        >
                          {isCompleted ? "Complete" : "Incomplete"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section
          aria-labelledby="chart-title"
          className="mb-8 rounded-2xl border border-purple-700/70 bg-[#12111d] p-5 sm:p-7"
        >
          <h2 id="chart-title" className="text-xl font-bold">
            Completion Overview
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Completed and incomplete tasks, updated automatically.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                <span className="font-medium text-emerald-200">Completed</span>
                <span className="text-gray-200">
                  {completedCount} of {totalTasks}
                </span>
              </div>
              <div
                className="h-5 overflow-hidden rounded-full border border-emerald-400/40 bg-gray-800"
                role="img"
                aria-label={`${completedCount} completed tasks out of ${totalTasks}`}
              >
                <div
                  className="h-full rounded-full bg-emerald-400 transition-all duration-300"
                  style={{ width: `${(completedCount / totalTasks) * 100}%` }}
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                <span className="font-medium text-amber-100">Incomplete</span>
                <span className="text-gray-200">
                  {incompleteCount} of {totalTasks}
                </span>
              </div>
              <div
                className="h-5 overflow-hidden rounded-full border border-amber-300/40 bg-gray-800"
                role="img"
                aria-label={`${incompleteCount} incomplete tasks out of ${totalTasks}`}
              >
                <div
                  className="h-full rounded-full bg-amber-300 transition-all duration-300"
                  style={{ width: `${(incompleteCount / totalTasks) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <p className="mt-5 text-xs text-gray-400">
            This chart shows task counts, not combat success probability.
          </p>
        </section>

        <footer className="mt-10 border-t border-gray-700 pt-5 text-center text-xs leading-6 text-gray-400">
          Black Bulls Vanguard Division · Anti-Magic Readiness
          <p>Task progress resets when the page is refreshed.</p>
        </footer>
      </div>
    </main>
  );
}