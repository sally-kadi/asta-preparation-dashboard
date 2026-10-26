# REVIEW.md — Asta's Preparation Dashboard

## 1. Purpose

This document reviews the dashboard against the assignment requirements, records the checks performed, summarizes user feedback, and identifies known limitations.

## 2. Requirements Review

The dashboard implements the requested minimum viable product (MVP):

- Three predefined preparation tasks:
  - Sword Control — High priority
  - Physical Endurance — Medium priority
  - Team Coordination — High priority
- Controls to mark tasks complete and undo completion.
- A completed-task count and total-task count.
- A calculated preparation progress percentage.
- Clear task status labels and visual feedback.
- A responsive layout with keyboard-operable task controls.

## 3. Decisions and Clarifications

- Progress represents completed preparation tasks, not the probability of winning a battle.
- Each task contributes equally to the progress percentage.
- The dashboard uses React state to track completed tasks.
- Task progress resets when the page is refreshed.
- Adding, editing, deleting, or permanently saving tasks is outside the MVP scope.

## 4. Automated Checks

The following results were recorded during earlier development:

- `npm run lint` — passed.
- `npm run build` — passed.
- TypeScript checks completed successfully during the production build.
- Static page generation and build finalization completed successfully.

These checks should be rerun after the final code changes before submission.

## 5. Manual Testing

The dashboard was manually tested in the local browser.

### Dedicated Repeated-Toggle Test — October 26, 2026

| Action | Expected Progress | Observed Progress | Result |
|---|---|---|---|
| Initial state | 0 of 3 — 0% | 0% | Passed |
| Complete Sword Control | 1 of 3 — 33% | 33% | Passed |
| Complete Physical Endurance | 2 of 3 — 67% | 67% | Passed |
| Complete Team Coordination | 3 of 3 — 100% | 100% | Passed |
| Undo Sword Control | 2 of 3 — 67% | 67% | Passed |
| Complete Sword Control again | 3 of 3 — 100% | 100% | Passed |
| Undo Physical Endurance | 2 of 3 — 67% | 67% | Passed |
| Undo Team Coordination | 1 of 3 — 33% | 33% | Passed |
| Undo Sword Control | 0 of 3 — 0% | 0% | Passed |

All observed percentages matched the expected results.

The two-task result was explicitly verified at **67%**.

No unexpected percentages or duplicate completion increments were observed during the dedicated test.

### Previously Recorded Checks

- Refreshing the page resets task completion to 0%.
- The dashboard was checked at a mobile viewport of approximately 360px.
- Keyboard navigation was tested using Tab and Enter.
- Completed tasks display green highlighting and strike-through titles.
- The progress bar remains visible at 0%.

These checks were recorded during earlier development and are separate from the dedicated repeated-toggle test.

## 6. Implementation Findings

The dashboard uses React `useState` to store the IDs of completed tasks.

The completed count is derived from the state, and the incomplete count is calculated by subtracting completed tasks from the total.

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

### Design Evidence

Design references and implemented dashboard screenshots are stored in `docs/evidence/`.

The final review should link the exact design-reference screenshot and implemented mobile screenshot filenames rather than referring only to the folder.

## 8. User Feedback

### Real-Person Pilot Test

**Tester:** A friend.

**Testing Method:** Manual interaction with the dashboard.

The tester interacted with the task-tracking feature by marking tasks complete and undoing completion.

She observed the preparation progress percentage changing in response to these actions.

### Understanding of Progress

The tester understood that the percentage represents completed preparation tasks rather than the probability of defeating Lucifero.

For example, **67% means that 2 out of 3 preparation tasks have been completed**.

### UI/UX Feedback

The following improvement suggestions were recorded:

- **Progress Bar:** Add a subtle border or background so the progress bar remains visible at 0%.
- **Interactive Feedback:** Use green highlights or strike-through text to make completed tasks easier to recognize.
- **Readability:** Break dense content into shorter sections for easier scanning.

### Improvements Implemented

The dashboard was refined with a visible progress-bar background, green completion styling, strike-through task titles, and clearer content sections.

### Pilot Outcome

The tester interacted with the completion controls and correctly interpreted the progress percentage.

This small pilot supports the clarity of the core task-tracking interaction but does not establish comprehensive usability or accessibility testing.

## 9. Reflection

### Did the PRD help prevent unnecessary features?

The PRD helped keep the project focused on the three required preparation tasks, completion controls, and calculated progress.

Features such as user accounts, task creation, and permanent storage were excluded from the MVP.

### What did the POC test, and what did it not prove?

The POC documented the core task-tracking behavior.

A dedicated repeated-toggle test was performed on October 26, 2026, using the implemented dashboard.

The test verified the sequence:

**0% → 33% → 67% → 100% → 67% → 100% → 67% → 33% → 0%**

The test was performed after the dashboard implementation and should not be presented as a separate pre-build experiment.

The original minimal POC or its earlier commit has not yet been identified in this review.

The test does not prove long-term persistence, performance under load, or comprehensive accessibility.

### Why is the MVP useful?

The MVP provides a straightforward way to track preparation objectives, identify completed tasks, and see how much work remains.

The small scope makes the core interaction easy to understand and test.

### What was the outcome of using MCP?

Stitch MCP was not verified as successfully connected.

A manual design-reference fallback was used instead.

The detailed connection outcome and fallback documentation are recorded in `docs/MCP.md`.

The manual fallback should not be represented as a successful MCP integration.

### What AI-generated decision was reviewed or corrected?

The implementation and documentation were reviewed rather than accepted without verification.

One concrete design suggestion was to add a visible background or border to the progress bar so users could identify it even at 0%.

The suggestion was evaluated against the initial-state display requirement and the dashboard's visual clarity.

The progress-bar styling was refined to make the empty state more visible.

This is an example of reviewing a design suggestion and applying a change based on the project's requirements.

The source of the suggestion should be identified as AI-generated only if it was actually proposed by an AI tool.

### How is progress calculated?

Progress is calculated by dividing the number of completed tasks by the total number of tasks, multiplying by 100, and rounding to the nearest whole number.

For three tasks:

- 0 completed = 0%
- 1 completed = 33%
- 2 completed = 67%
- 3 completed = 100%

### What responsibility remained with the developer?

The developer remained responsible for:

- Reviewing implementation decisions.
- Verifying progress calculations.
- Testing completion and undo functionality.
- Running lint and production build checks.
- Testing keyboard and mobile behavior.
- Reviewing AI-assisted suggestions.
- Recording actual evidence.
- Ensuring the final submission accurately reflects the work completed.

## 10. Accessibility Review

Task controls can be operated using a keyboard.

Earlier testing recorded successful Tab navigation and Enter activation.

However, repeated buttons must also have accessible names that identify the associated task.

For example:

- Mark Sword Control complete
- Mark Physical Endurance complete
- Mark Team Coordination complete
- Undo completion of Sword Control

This task-specific accessible naming requirement must be checked in the implementation before final submission.

## 11. Known Limitations

- Task completion resets when the page is refreshed.
- There is no login, database, or permanent task storage.
- The dashboard uses three predefined tasks rather than allowing users to create or edit tasks.
- The dedicated repeated-toggle test was performed after implementation.
- The original minimal POC or corresponding earlier commit has not yet been identified.
- Exact design and mobile evidence filenames still need to be linked.
- Task-specific accessible button names require code verification.

## 12. Review Outcome

The core task-tracking functionality passed the dedicated manual repeated-toggle test on October 26, 2026.

The two-task state was explicitly verified at **2 of 3 tasks completed (67%)**.

A friend also tested the completion controls and understood the progress percentage as preparation completion rather than battle victory probability.

Earlier lint, build, keyboard, mobile, and refresh checks were recorded.

### Remaining Submission Checks

- Identify the original minimal POC or its earlier commit, if available.
- Verify and implement task-specific accessible button names.
- Add exact design-reference and implemented mobile evidence links.
- Rerun `npm run lint` and `npm run build` after final code changes.
- Confirm `POC.md`, `REVIEW.md`, and `MCP.md` are consistent.
- Commit and push the final changes to `assignment-2-asta-mvp`.