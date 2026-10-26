# Assignment 2 — Asta Preparation Dashboard
# Review Report

## 1. Purpose

This document reviews the implementation, testing, design decisions, limitations, and lessons learned during the development of the Asta Preparation Dashboard.

The goal was to build a functional and responsive dashboard that allows users to track preparation tasks and monitor their completion progress.

## 2. Requirements Review

The dashboard includes the following MVP requirements:

- Three predefined preparation tasks.
- Task completion and undo functionality.
- Automatic calculation of completed tasks.
- A progress bar showing the completion percentage.
- A task summary displaying current completion status.
- A responsive interface for desktop and mobile screens.

The core requirements were implemented and manually tested.

## 3. Design and Implementation Decisions

The dashboard uses Next.js, React, TypeScript, and Tailwind CSS.

React state manages the completed tasks.

The completed-task count and progress percentage are derived from the current task state rather than stored separately.

The progress calculation uses:

`Math.round((completedCount / totalTasks) * 100)`

Each task contributes equally to the total progress.

The interface uses a dark fantasy-inspired visual theme with purple accents.

## 4. Automated Checks

The following development checks were previously recorded as successful:

- ESLint validation.
- Production build.
- TypeScript compilation through the build process.
- Next.js upgraded to version 16.4.3.
- Dependency audit reported zero vulnerabilities after the upgrade.

These results describe previously performed checks and should be rerun after the final documentation and code changes if needed.

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

The two-task state was explicitly verified:

**2 of 3 completed tasks = 67%.**

The full progress sequence was:

**0% → 33% → 67% → 100% → 67% → 100% → 67% → 33% → 0%**

The test was performed after the MVP implementation.

### Refresh Behavior

Refreshing the page resets task completion to the initial state because task progress is stored only in memory.

This behavior was previously recorded as successfully tested.

## 6. Implementation Findings

The dashboard uses a single source of truth for task completion.

Completing or undoing a task updates the task state, and the progress calculation derives the updated percentage.

During the dedicated repeated-toggle test:

- The completion count remained within the expected range of 0 to 3.
- No duplicate completion increments were observed.
- The progress percentage remained consistent with the completed-task count.
- Undo actions correctly reduced the progress percentage.

## 7. Design Review

The interface uses a dark fantasy-inspired theme with purple accents, task cards, and a progress display.

The design review focused on:

- Clear presentation of task information.
- Readability and visual hierarchy.
- Visibility of the progress bar, including at 0%.
- Completed-task styling.
- Desktop and mobile layouts.

### Design Evidence

The following evidence files are available in `docs/evidence/`:

- Dashboard progress screenshot: `docs/evidence/dashboard-progress.png`
- Desktop design reference: `docs/evidence/stitch-desktop.png`
- Mobile design reference: `docs/evidence/stitch-mobile.png`

These files provide visual references for reviewing the dashboard interface and design direction.

The additional file `stitch-desktop.pn` was found in the evidence directory, but its format and purpose have not yet been verified, so it is not used as a design reference here.

## 8. User Feedback

A friend reviewed a screenshot of the dashboard and provided visual feedback.

The suggestions included:

1. Make the progress bar visible even when progress is 0%.
2. Use green text or a strikethrough style to distinguish completed tasks.
3. Split dense text into smaller sections to improve readability.

This feedback was based on a screenshot review.

An attempt was made to share the deployed website for interactive testing, but the friend could not open the site.

Therefore, a complete real-person interactive pilot has not yet been documented.

The feedback should not be represented as evidence that another person tested the Complete and Undo controls.

## 9. Reflection

### Requirements and Scope

The PRD helped define a focused MVP with three tasks, completion controls, and automatically calculated progress.

Keeping the scope limited made the main interaction easier to implement and test.

### POC Timeline and Verification

The initial dashboard implementation and POC documentation were committed together on October 11, 2026.

**Initial implementation commit:** `6bf7e67` — Build Asta preparation dashboard.

This commit includes the original POC plan and the initial implementation of task completion, undo functionality, and progress calculation.

However, it does not establish a separately tested pre-MVP prototype.

A dedicated repeated-toggle test was performed on October 26, 2026, after implementation.

All observed progress values matched the expected results, including **2 of 3 = 67%**.

The full test sequence is also documented in `docs/POC.md`.

### Design Tool Reflection

The project documentation records a Stitch MCP fallback.

The design process continued using available references and manual implementation rather than claiming an unavailable MCP integration was successfully completed.

Further details are documented in `docs/MCP.md`.

### AI-Assisted Development Reflection

AI assistance was used during development and review to help examine implementation and design considerations.

One concrete review suggestion was to make the progress indicator visible when completion was 0%.

This suggestion was evaluated against the dashboard's expected initial state.

AI suggestions were not treated as automatic proof of correctness. The actual completion and undo behavior was verified through manual browser testing.

### Lessons Learned

This project reinforced the importance of:

- Keeping state management simple.
- Deriving progress from task completion state.
- Testing repeated user interactions.
- Recording expected and observed results.
- Separating screenshot feedback from interactive user testing.
- Maintaining consistency between implementation, documentation, and Git history.

## 10. Accessibility Review

The task buttons include task-specific accessible names.

The button implementation uses:

```tsx
<button
  type="button"
  onClick={() => toggleTask(task.id)}
  aria-pressed={isCompleted}
  aria-label={
    isCompleted
      ? `Undo completion of ${task.title}`
      : `Mark ${task.title} complete`
  }
>
  {isCompleted ? "Undo Completion" : "Mark Complete"}
</button>
```

The accessible label identifies the relevant task, while `aria-pressed` communicates its current completion state.

The buttons also include visible keyboard focus styling.

These implementation details were checked in the code. A comprehensive screen-reader accessibility test has not yet been documented.

## 11. Known Limitations

- Task progress resets after refreshing the page.
- Tasks cannot be added, edited, or deleted by users.
- No database or persistent storage is included.
- A complete external interactive user pilot has not yet been documented.
- The initial POC was not independently validated before the MVP implementation.
- Comprehensive accessibility testing remains outside the recorded test evidence.

## 12. Final Review Outcome

The core dashboard functionality was implemented and manually tested.

The dedicated repeated-toggle test passed, confirming the expected progress values of 0%, 33%, 67%, and 100%.

The original POC plan and initial implementation were identified in Git commit `6bf7e67`, while the later verification test was accurately documented as post-implementation testing.

Task-specific accessible button labels were confirmed in the implementation.

Design evidence filenames were identified and linked in this review.

The remaining work before final submission is to rerun final project checks, confirm the latest changes are committed and pushed, and clearly communicate the incomplete external interactive pilot.

**Overall Status:** Core MVP implementation and documented manual functionality tests passed, with the limitations above remaining clearly identified.