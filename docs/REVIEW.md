# Asta's Preparation Dashboard — Review

## 1. Purpose

This document records the requirements review, implementation decisions, manual testing, and remaining limitations of Asta's Preparation Dashboard.

## 2. Requirements Review

The dashboard contains exactly three predefined preparation tasks:

- Sword Control — High priority.
- Physical Endurance — Medium priority.
- Team Coordination — High priority.

Users can mark tasks as complete or undo completion. The completed-task count and progress percentage are calculated from the current task state.

## 3. Decisions and Clarifications

### Decision 1: Meaning of Progress

**Potential ambiguity:** Progress could be misunderstood as Asta's probability of defeating Lucifero.

**Decision:** Progress represents only the percentage of preparation tasks completed.

**Reason:** The dashboard tracks preparation activity, not combat outcomes or victory probability.

### Decision 2: Refresh Behavior

**Potential ambiguity:** It was unclear whether completed tasks should remain complete after refreshing the page.

**Decision:** Tasks reset to incomplete when the page is refreshed.

**Reason:** Persistent storage is outside the MVP scope.

### Decision 3: Task Scope

**Potential ambiguity:** The dashboard could include adding, editing, or deleting tasks.

**Decision:** The MVP contains exactly three predefined tasks and does not support adding, editing, or deleting tasks.

**Reason:** This keeps the application focused on viewing tasks, toggling completion, and calculating progress.

## 4. Automated Checks

The following checks were reported as completed during development:

- `npm run lint` — reported passed during development.
- `npm run build` — reported passed during development.

These checks should be run again on the final version before submission.

## 5. Manual Testing

| Test | Expected result | Observed result |
|---|---|---|
| Initial page load | 0 of 3 tasks, 0% | Passed |
| Complete one task | 1 of 3 tasks, 33% | Passed |
| Complete all tasks | 3 of 3 tasks, 100% | Passed |
| Undo one completed task | 2 of 3 tasks, 67% | Passed |
| Refresh the page | Tasks reset to 0%, incomplete | Passed |
| Toggle the same task repeatedly | Completion and progress remain consistent | Passed |
| Keyboard-only interaction | Tasks can be toggled using the keyboard | Pending verification |
| Mobile viewport around 360px | Layout remains usable without horizontal overflow | Passed |

## 6. Implementation Findings

Task completion is managed using React state. The completed-task count is derived from the completed task IDs, and the progress percentage is calculated by dividing the completed-task count by the total number of tasks.

The percentage is rounded to a whole number. Completion is not stored persistently, so refreshing the page resets the tasks.

## 7. Design Review

The selected visual direction is dark fantasy, using a dark background, gray surfaces, and purple accents. The interface is intended to keep task names, priorities, completion controls, and progress easy to understand on desktop and mobile.

Design and application screenshots are maintained in `docs/evidence/`. Each screenshot should be checked to ensure it shows the correct design or application state before submission.

## 8. User Feedback

Feedback from another person who tried the dashboard has not yet been recorded.

Before submission, ask someone to use the dashboard and record their actual feedback, including one thing they found clear or useful and any difficulty they experienced. Do not report feedback that was not received.

## 9. Reflection

One important implementation decision was to keep task completion in a single React state and derive the completed-task count and progress percentage from it. This avoids maintaining separate values that could become inconsistent.

Progress describes task completion only, and refreshing the page resets the current state because persistence is outside the MVP scope.

During development, I reviewed the implementation decisions instead of relying only on generated suggestions. I kept task completion in React state and calculated the completed-task count and progress percentage from that state. This keeps the displayed progress consistent with the selected tasks. I also confirmed that refreshing the page resets task completion because persistent storage is outside the MVP scope. This project helped me understand the importance of testing application behavior and verifying results before submission.

## 10. Known Limitations

- Task completion resets when the page is refreshed.
- The dashboard has no login, database, or persistent storage.
- Keyboard-only interaction — Passed.
- Feedback from another person and the specific AI-decision reflection still need to be completed.

## 11. Review Outcome

The core dashboard behavior has been manually checked, including task completion, progress updates, repeated toggling, refresh behavior, and the mobile layout at approximately 360px.

The automated checks were reported as passing during development but should be rerun on the final version. Final review remains open until keyboard-only interaction is verified, genuine user feedback is recorded, and the AI-decision reflection is completed.
