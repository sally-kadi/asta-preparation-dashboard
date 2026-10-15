# REVIEW.md — Asta's Preparation Dashboard

## 1. Purpose

This document reviews the dashboard against the assignment requirements, records the checks performed, summarizes the feedback received, and identifies known limitations.

## 2. Requirements Review

The dashboard implements the requested minimum viable product (MVP):

- Three predefined preparation tasks:
  - Sword Control — High priority
  - Physical Endurance — Medium priority
  - Team Coordination — High priority
- A control to mark each task complete and undo completion.
- A completed-task count and total-task count.
- A calculated preparation progress percentage.
- Clear task status labels and visual feedback.
- A responsive layout with keyboard-operable task controls.

## 3. Decisions and Clarifications

- Progress represents completed preparation tasks, not the probability of winning a battle.
- Each task contributes equally to the progress percentage.
- The dashboard uses React state to track completed tasks.
- Task progress is temporary and resets when the page is refreshed.
- Adding, editing, deleting, or saving tasks permanently is outside the MVP scope.

## 4. Automated Checks

The following checks were run after the latest dashboard changes:

- `npm run lint` — passed; no errors were reported.
- `npm run build` — passed successfully.
- TypeScript completed successfully during the production build.
- Static page generation and build finalization completed successfully.

## 5. Manual Testing

The following behaviors were checked during development:

- Initial progress displays 0% when no tasks are complete.
- Completing one task updates the count and progress to approximately 33%.
- Completing all three tasks updates progress to 100%.
- Undoing a completed task reduces progress accordingly.
- Repeatedly toggling a task updates its status correctly.
- Refreshing the page resets task completion, as expected for session-only state.
- The dashboard was checked at a mobile viewport of approximately 360px.
- Keyboard navigation was tested by moving focus to a task button with Tab and activating it with Enter.
- The task button changed to "Undo Completion" when the task was marked complete.
- Completed tasks display a green highlight and strike-through title.
- The progress bar has a visible border and background when progress is 0%.

## 6. Implementation Findings

The dashboard uses React `useState` to store the IDs of completed tasks. The completed count is derived from the state, and the incomplete count is calculated by subtracting completed tasks from the total.

The progress percentage is calculated as:

`Math.round((completedCount / totalTasks) * 100)`

The task cards, summary table, completion overview, and progress indicators use the same task state so their displayed statuses update together.

## 7. Design Review

The interface uses a dark fantasy-inspired theme with purple accents, clear section headings, priority labels, and distinct task cards.

Visual refinements include:

- A visible progress-bar border and background.
- Green styling and strike-through text for completed tasks.
- Separate sections for preparation tasks, the summary table, and completion overview.
- Responsive layout classes for smaller screens.
- Visible keyboard focus styling on task controls.

Screenshots are stored in `docs/evidence/`, including the dashboard and design references.

## 8. User Feedback

Feedback received described the task-tracking feature as clear and straightforward.

Suggestions included:

- Adding a light border or background to keep the progress bar visible at 0%.
- Providing visual feedback when a task is completed, such as a green highlight or strike-through.
- Breaking dense paragraphs into shorter, easier-to-scan content.

The progress-bar styling and completed-task appearance were refined in response to this feedback. The interface also uses separate cards and sections to make information easier to scan.

## 9. Reflection

### Did the PRD help prevent unnecessary features?

The PRD helped keep the project focused on the three required tasks, task completion controls, and calculated progress. Features such as accounts and permanent storage were kept outside the MVP.

### What did the POC test, and what did it not prove?

The POC was intended to investigate a focused feasibility question before committing to the implementation. The actual experiment, results, and evidence should be described in `POC.md`; this review does not claim results that are not recorded there.

### Why is the MVP useful?

The MVP provides a simple way to see which preparation tasks are complete and how much of the plan remains. Its scope is small enough to test the core interaction without adding unnecessary complexity.

### What was the outcome of using MCP?

The actual connection outcome and evidence are documented in `MCP.md`. If the connection was blocked, the review should describe the limitation and the fallback that was actually used.

### What AI-generated decision was reviewed or corrected?

The implementation was reviewed against the assignment requirements and feedback. The progress calculation, task state updates, and visual feedback were checked rather than accepted without review.

### How is progress calculated?

Progress equals the number of completed tasks divided by the total number of tasks, multiplied by 100 and rounded to the nearest whole number.

### What responsibility remained with the developer?

The developer remained responsible for checking the implementation, running lint and build commands, testing keyboard and mobile behavior, reviewing documentation, verifying evidence, and ensuring the final submission accurately reflects the work completed.

## 10. Known Limitations

- Task completion resets when the page is refreshed.
- There is no login, database, or permanent task storage.
- The dashboard uses three predefined tasks rather than allowing task management.
- POC and MCP conclusions must match the actual experiments and evidence documented in their respective files.

## 11. Review Outcome

The production build and lint checks completed successfully during the latest recorded checks. Manual testing covered task completion, undo behavior, progress updates, refresh behavior, keyboard interaction, and mobile layout.

Before submission, verify that the final `POC.md` and `MCP.md` accurately describe what happened, confirm the evidence screenshots are present, and ensure the latest documentation is pushed to the assignment branch.