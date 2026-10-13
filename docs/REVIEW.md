# Asta's Preparation Dashboard — Review

## 1. Purpose

This document records the review of the requirements, implementation, and testing of Asta's Preparation Dashboard.

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

- `npm run lint` — passed.
- `npm run build` — passed.

These results should be reproduced on the final version before submission.

## 5. Manual Testing

The following dashboard behaviors were manually checked:

| Test | Expected result | Observed result |
|---|---|---|
| Initial page load | 0 of 3 tasks, 0% | Passed |
| Complete one task | 1 of 3 tasks, 33% | Passed |
| Complete all tasks | 3 of 3 tasks, 100% | Passed |
| Undo one completed task | 2 of 3 tasks, 67% | Passed |
| Refresh the page | Tasks reset to 0%, incomplete | Passed |
| Toggle the same task repeatedly | Completion and progress remain consistent | Passed |
| Keyboard-only interaction | Tasks can be toggled using the keyboard | Pending verification |
| Mobile viewport around 360px | Layout remains usable without horizontal overflow | Pending verification |

## 6. Implementation Findings

Task completion is managed using the current page's React state. The completed-task count is derived from the completed task IDs, and the progress percentage is calculated from that count divided by the total number of tasks.

The progress percentage is rounded to a whole number. Completion is not stored persistently, so refreshing the page resets the tasks.

## 7. Design Review

The selected visual direction is dark fantasy, using a dark background, gray surfaces, and purple accents. The interface is intended to keep task names, priorities, completion controls, and progress easy to understand on desktop and mobile.

Actual design screenshots should be added to `docs/evidence/` before submission.

## 8. User Feedback

Feedback from another person who has tried the working dashboard has not yet been recorded. This section must be updated with that person's actual feedback after a brief usability test.

## 9. Reflection

The main implementation decision was to keep task completion in a single state and derive the completed count and progress percentage from it. This avoids maintaining separate values that could become inconsistent.

Progress describes task completion only, and the page refresh resets the current state because persistence is outside the project scope.

Before final submission, record one specific AI-generated suggestion or decision that was reviewed and corrected, explain why it was changed, and include any additional findings from the remaining manual checks.

## 10. Known Limitations

- Task completion resets when the page is refreshed.
- The dashboard has no login, database, or persistent storage.
- Repeated-toggle, keyboard-only, and narrow-mobile checks still need verification.
- User feedback and the AI-decision reflection still need to be completed honestly.

## 11. Review Outcome

The core dashboard behavior and the reported automated checks are complete. Final review remains open until the pending tests, real evidence screenshots, and feedback/reflection details have been addressed.
