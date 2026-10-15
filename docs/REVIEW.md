# Asta's Preparation Dashboard — Review

## 1. Purpose

This document records the requirements review, implementation decisions, manual testing, feedback, and remaining limitations of Asta's Preparation Dashboard.

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

During development, the following checks were reported as passing:

- `npm run lint` — reported passed during development.
- `npm run build` — production build completed successfully in the latest recorded check.

The lint and build commands should be run again after the final code changes and before submission.

## 5. Manual Testing

| Test | Expected result | Observed result |
|---|---|---|
| Initial page load | 0 of 3 tasks, 0% | Passed |
| Complete one task | 1 of 3 tasks, 33% | Passed |
| Complete all tasks | 3 of 3 tasks, 100% | Passed |
| Undo one completed task | 2 of 3 tasks, 67% | Passed |
| Refresh the page | Tasks reset to 0%, incomplete | Passed |
| Toggle the same task repeatedly | Completion and progress remain consistent | Passed |
| Keyboard-only interaction | Tasks can be toggled using the keyboard | Verify again before submission |
| Mobile viewport around 360px | Layout remains usable without horizontal overflow | Passed |
| Completed task visual feedback | Completed card becomes green-tinted and its title is struck through | Verified after the UI update |
| Progress bar at 0% | Border and background remain visible | Verify visually before submission |

## 6. Implementation Findings

Task completion is managed using React state. The completed-task count is derived from the completed task IDs, and the progress percentage is calculated by dividing the completed-task count by the total number of tasks.

The percentage is rounded to a whole number. With three tasks, the progress values are 0%, 33%, 67%, and 100%.

Completion is not stored persistently, so refreshing the page resets the tasks.

## 7. Design Review

The selected visual direction is dark fantasy, using a dark background, gray surfaces, and purple accents. The interface is intended to keep task names, priorities, completion controls, and progress easy to understand on desktop and mobile.

The reviewer suggested making the progress bar more visible at 0%, providing visual feedback when tasks are completed, and improving readability.

The progress bar was updated with a subtle border and a visible background. Completed task cards use a green-tinted style, and completed task titles use strike-through text. The task cards, summary table, and completion overview also organize information into clearer sections.

Design and application screenshots are maintained in `docs/evidence/`. Screenshots should be checked to ensure they show the correct design or application state before submission.

## 8. User Feedback

Feedback received from another person described the task-tracking feature as clear and straightforward, helping users check their progress and complete tasks without unnecessary difficulty.

The reviewer suggested three visual improvements:

- **Progress bar:** Add a subtle border or faint background fill so the bar remains visible at 0%.
- **Interactive feedback:** Add visual feedback, such as green highlighting or strike-through text, when a task is marked complete.
- **Readability:** Break down dense paragraphs into bullet points for quicker scanning.

### Improvements Made

The progress bar now has a subtle border and a visible background. Completed task cards change to a green-tinted style, and completed task titles use strike-through text.

The dashboard also presents task information through separate task cards, a summary table, and a completion overview.

## 9. Reflection

### What decision did the PRD help prevent?

The PRD helped keep the project focused on the core requirements: three predefined tasks, completion toggles, and calculated progress. Adding unnecessary features such as login, a database, or task creation would have expanded the MVP beyond its intended scope.

### What did the POC test, and what did it not prove?

The POC was intended to investigate a focused feasibility question before committing to the implementation. Its exact result and evidence should be checked against `POC.md`; a successful experiment does not prove that every part of the final application is correct.

### Why is the MVP useful?

The MVP provides a simple way to see the three preparation tasks, mark them complete, and understand progress at a glance without unnecessary complexity.

### What was the MCP outcome?

The MCP outcome should match the actual connection and tool-call evidence documented in `MCP.md`. If the connection was blocked, the documented fallback should explain how development continued without claiming a successful MCP connection.

### What AI-generated decision did I correct or review?

I reviewed suggestions against the assignment requirements instead of accepting every suggestion automatically. I kept task completion in React state and calculated the count and percentage from that state so the displayed progress stays consistent with the selected tasks.

I also used reviewer feedback to improve the progress bar's visibility and the visual feedback for completed tasks.

### How is progress calculated?

The application divides the number of completed tasks by the total number of tasks and multiplies by 100. With three tasks, completing one gives approximately 33%, completing two gives approximately 67%, and completing all three gives 100%.

### What responsibility remained with me when using AI tools?

I remained responsible for checking the generated code, running the application, testing task completion and undo behavior, checking the mobile layout, reviewing accessibility, and verifying that the documentation accurately describes the actual implementation and test results.

## 10. Known Limitations

- Task completion resets when the page is refreshed.
- The dashboard has no login, database, or persistent storage.
- Keyboard-only interaction must be verified again before submission.
- The progress bar's appearance at 0% must be checked visually.
- The POC and MCP documentation must accurately reflect their actual results and evidence.
- Feedback and reflections should describe only what actually happened during review and testing.

## 11. Review Outcome

The core dashboard behavior has been manually checked, including task completion, progress updates, repeated toggling, refresh behavior, and the mobile layout at approximately 360px.

The latest recorded production build completed successfully. The lint result should be confirmed again after the final changes.

The review is ready for final verification once keyboard-only interaction, the 0% progress bar appearance, the final automated checks, and the accuracy of the POC and MCP evidence have been confirmed.