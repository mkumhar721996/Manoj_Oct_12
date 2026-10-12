# UI Guidelines

Product: internal workflow builder and process monitor for employees. Single web client, 50-100 concurrent internal users — not a public-facing product.

## Navigation

- Persistent left sidebar with two top-level sections: **Workflows** (design/configure) and **Runs** (monitor in-progress and past process executions). A sidebar beats a top bar here because the two sections are peers a user jumps between constantly, not a linear flow.
- No breadcrumb trail beyond "section > item name" — workflow definitions are flat, not nested folders, so deeper breadcrumbs would describe structure that doesn't exist.

## Layout and density

- Default to a data-dense console layout (compact row heights, `font-size-sm` for tabular data) since this is an internal tool used all day by the same ~100 people, who benefit more from seeing more rows than from whitespace.
- Design for desktop viewports (1280px+) only; this is a workday tool used at a desk, not on mobile, so no mobile breakpoint is required.
- Reserve generous spacing (`space-4`) for the workflow design canvas itself, where visually tracing step connections matters more than density.

## Component usage

- Use `.table` for any list of workflow runs or step executions — these are scanned and compared row-to-row, which a card grid doesn't support.
- Use `.card` for a single workflow's summary or a run's detail view, where one item's grouped attributes are the focus rather than comparison across many items.
- Use `.chip` (`chip-success` / `chip-warning` / `chip-danger`) for run and step status everywhere it appears, so status is recognizable at a glance regardless of which screen it's on.
- Use `.btn-primary` for the single most important action per screen (e.g. "Run workflow", "Save"); use `.btn-secondary` for everything else, so users always have one obvious next step.
- Use `.panel` for transient overlays (dropdowns, the step configuration flyout) — its shadow distinguishes "floating above the page" from the flat `.card`, which lives in the page flow.

## Theme

- Light theme only. This is a business-hours-only internal tool (see ADR-0007) viewed in lit offices, so a dark mode isn't worth the added maintenance surface.

## Voice and tone

- Direct and operational: describe what happened or what to do next ("3 steps failed", "Retry step"), not conversational filler. Employees are debugging a business process, not being onboarded to a consumer app.
- Use the same terms as the workflow domain itself (workflow, run, step) consistently in every label; never substitute synonyms like "job" or "task" for "step".
