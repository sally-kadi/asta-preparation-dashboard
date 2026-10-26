# Proof of Concept (POC)

## Objective

Verify that the core task-tracking interaction works correctly and document the results of manual browser testing.

## Core Features to Test

1. Display exactly three predefined preparation tasks.
2. Allow the user to mark a task as complete.
3. Allow the user to undo completion and return a task to incomplete.
4. Calculate the completed-task count and percentage from the task states.
5. Keep the count between zero and three.

## Initial Task Data

All three tasks start as incomplete.

| Task | Priority | Initial Status |
|---|---|---|
| Sword Control | High | Incomplete |
| Physical Endurance | Medium | Incomplete |
| Team Coordination | High | Incomplete |

## Expected Results

| Completed Tasks | Progress Percentage | Expected Status |
|---|---:|---|
| 0 of 3 | 0% | Incomplete |
| 1 of 3 | 33% | In Progress |
| 2 of 3 | 67% | In Progress |
| 3 of 3 | 100% | Complete |
| Undo one task after reaching 3 of 3 | 67% | In Progress |

## Test Procedure

1. Open the dashboard and verify that all three tasks are incomplete.
2. Confirm that the progress count is 0 of 3 and the percentage is 0%.
3. Mark one task complete and verify that the percentage becomes 33%.
4. Mark a second task complete and verify that the percentage becomes 67%.
5. Mark the final task complete and verify that the percentage becomes 100%.
6. Undo one task and verify that the percentage returns to 67%.
7. Toggle tasks repeatedly and verify that the count and percentage remain consistent.
8. Refresh the page and verify that all tasks reset to incomplete.

## Implementation Principle

Task completion state is the single source of truth. The completed-task count and percentage are calculated from the current task states rather than maintained as separate, manually updated values.

The percentage is calculated as:

`Math.round((completedTasks / totalTasks) * 100)`

## Actual Test Results

The dashboard was manually tested in the local browser.

| Test | Expected Result | Observed Result |
|---|---|---|
| Initial page load | 0 of 3, 0% | Passed — 0% displayed |
| Complete one task | 1 of 3, 33% | Passed — 33% displayed |
| Complete two tasks | 2 of 3, 67% | Passed — 67% displayed |
| Complete all three tasks | 3 of 3, 100% | Passed — 100% displayed |
| Undo one completed task | 2 of 3, 67% | Passed — 67% displayed |
| Refresh the page | All tasks reset to incomplete, 0% | Previously recorded as passed |

### Dedicated Repeated-Toggle Test

A dedicated manual test was performed on October 26, 2026.

| Action | Expected Progress | Actual Progress | Result |
|---|---|---|---|
| Initial state | 0/3 — 0% | 0% | Passed |
| Complete Sword Control | 1/3 — 33% | 33% | Passed |
| Complete Physical Endurance | 2/3 — 67% | 67% | Passed |
| Complete Team Coordination | 3/3 — 100% | 100% | Passed |
| Undo Sword Control | 2/3 — 67% | 67% | Passed |
| Complete Sword Control again | 3/3 — 100% | 100% | Passed |
| Undo Physical Endurance | 2/3 — 67% | 67% | Passed |
| Undo Team Coordination | 1/3 — 33% | 33% | Passed |
| Undo Sword Control | 0/3 — 0% | 0% | Passed |

### Additional Checks

- **Repeated toggling:** Passed. All observed percentages matched the expected values throughout the dedicated sequence.
- **Two-task progress:** Explicitly verified at 2 of 3 tasks completed, displaying 67%.
- **State consistency:** No unexpected percentages or duplicate completion increments were observed in the tested sequence.
- **Refresh behavior:** Previously recorded as passed; task state resets because it is not persisted.
- **Implementation decision:** Keep the MVP simple using in-memory React state, as persistent storage is outside the project scope.

## POC Timeline

The dedicated repeated-toggle verification was performed on October 26, 2026, using the implemented dashboard.

This test documents post-implementation verification. It should not be represented as a separate pre-build experiment.

The original minimal POC or its corresponding commit should be identified separately if available.

## Evidence

Screenshots of the working dashboard and design iterations are stored in `docs/evidence/`. Individual evidence files should be linked explicitly in the review documentation.

## Conclusion

The main completion, undo, progress calculation, and refresh-reset behaviors were recorded as manually tested.

The dedicated repeated-toggle test passed, including the explicitly verified two-task result of 67%.

The observed progress sequence was:

**0% → 33% → 67% → 100% → 67% → 100% → 67% → 33% → 0%**

**Status:** Core manual tests and dedicated repeated-toggle verification passed.