# Proof of Concept (POC)

## 1. Objective

The purpose of this document is to verify that the main task-tracking functionality works correctly.

The dashboard allows users to complete preparation tasks, undo completed tasks, and track their progress through an automatically updated percentage.

## 2. Core Features to Test

1. Display exactly three predefined preparation tasks.
2. Allow users to mark tasks as complete.
3. Allow users to undo task completion.
4. Automatically calculate the completed-task count and progress percentage.
5. Keep the completed-task count between 0 and 3.
6. Ensure repeated Complete and Undo actions produce consistent results.

## 3. Initial Task Data

All three tasks start as incomplete.

| Task | Priority | Initial Status |
|---|---|---|
| Sword Control | High | Incomplete |
| Physical Endurance | Medium | Incomplete |
| Team Coordination | High | Incomplete |

## 4. Expected Results

| Completed Tasks | Expected Progress |
|---|---|
| 0 of 3 | 0% |
| 1 of 3 | 33% |
| 2 of 3 | 67% |
| 3 of 3 | 100% |
| Undo one completed task from 3 of 3 | 67% |

The progress percentage represents completed preparation tasks, not the probability of winning a battle.

## 5. Implementation Approach

I used React state to manage completed tasks.

The completed-task count and percentage are calculated from the current task state rather than being updated separately.

The calculation is:

`Math.round((completedCount / totalTasks) * 100)`

This approach helps keep the task cards, summary table, and progress bar consistent.

Permanent storage was not included because it is outside the MVP requirements.

## 6. Manual Testing

The dashboard was manually tested in the local browser.

### Dedicated Repeated-Toggle Test — October 26, 2026

I performed a dedicated test to verify that completing and undoing tasks repeatedly updates the progress correctly.

| Action | Expected Progress | Actual Progress | Result |
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

### Test Results

All observed percentages matched the expected values.

The two-task result was explicitly verified:

**2 out of 3 completed tasks = 67%.**

The complete progress sequence was:

**0% → 33% → 67% → 100% → 67% → 100% → 67% → 33% → 0%**

No unexpected percentages or duplicate completion increments were observed during this test.

## 7. Additional Checks

The following checks were recorded during development:

- **Task completion:** Passed.
- **Undo functionality:** Passed.
- **Progress calculation:** Passed.
- **Repeated toggling:** Passed.
- **Refresh behavior:** Previously tested successfully. Refreshing resets task completion to 0%.
- **State consistency:** The progress bar and task summary use the same task state.

## 8. POC Timeline and Clarification

The earliest dashboard implementation and POC documentation were committed together on October 11, 2026.

**Initial implementation commit:** `6bf7e67` — Build Asta preparation dashboard.

This commit includes the initial dashboard code in `app/page.tsx` and the original POC documentation in `docs/POC.md`.

The initial implementation already contained the three predefined tasks, React state management, task-toggle logic, and progress calculation.

Therefore, this commit provides evidence of the initial implementation and POC plan, but it should not be described as a separate, independently validated pre-MVP prototype.

A dedicated repeated-toggle test was subsequently performed on October 26, 2026, after implementation.

The test confirmed the expected progress values of 0%, 33%, 67%, and 100%, including repeated completion and undo actions.

## 9. Evidence

Dashboard screenshots and design references are stored in:

`docs/evidence/`

The exact evidence filenames still need to be checked and linked in the review documentation.

The manual testing results are also documented in `REVIEW.md`.

## 10. Conclusion

The core task-tracking functionality passed the recorded manual tests.

Users can complete tasks, undo completion, and view updated progress percentages.

The dedicated repeated-toggle test confirmed that the percentage changes correctly throughout the full sequence.

The result **2 of 3 = 67%** was explicitly verified.

**Final Status:** Core functionality and dedicated repeated-toggle testing passed. The original minimal POC remains to be identified separately.