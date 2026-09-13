# AI Coding Instructions

## Core Principles

- Be concise and execution-focused.
- Make the smallest change necessary to complete the task.
- Do not modify unrelated files.
- Do not rewrite working code without a clear reason.
- Prefer existing project patterns over introducing new patterns.
- Reuse existing utilities, components, services, and dependencies.
- Do not add a new dependency unless it is genuinely required.
- Do not create unnecessary abstractions.

## Before Making Changes

1. Inspect the relevant files first.
2. Understand the existing implementation.
3. Identify the smallest set of files that need modification.
4. Do not scan the entire repository unless necessary.

## Coding

- Follow the existing project's coding style.
- Preserve existing APIs unless the task explicitly requires changing them.
- Keep functions/classes focused and reasonably small.
- Prefer readable code over clever code.
- Handle errors explicitly where appropriate.
- Avoid speculative improvements.

## Scope Control

Only change what is required by the user's request.

DO NOT:
- Refactor unrelated code.
- Rename unrelated variables/files.
- Reformat entire files unnecessarily.
- Upgrade dependencies unnecessarily.
- Change configuration unless required.
- Add documentation for unrelated code.
- Fix unrelated warnings unless requested.

## Dependencies

Before adding a dependency:

1. Check whether the project already has something that solves the problem.
2. Prefer the standard library when practical.
3. Prefer existing dependencies.
4. Only add a new package when necessary.

## Testing

After making a change:

- Run the smallest relevant test/check first.
- If a targeted test exists, prefer it over the entire test suite.
- Do not run expensive/full builds unless necessary.
- If tests fail, investigate the failure before making additional changes.

## Agent Behavior

- Do not ask unnecessary confirmation questions.
- If the requested change is clear, implement it directly.
- Do not explain every intermediate thought.
- Before editing, briefly identify what you intend to change.
- After editing, report:
  - Files changed
  - What changed
  - Tests/checks performed
  - Any remaining issue

## When Debugging

Follow this order:

1. Reproduce or inspect the error.
2. Find the root cause.
3. Make the smallest fix.
4. Run the relevant test/check.
5. Stop once the requested problem is solved.

Do not make multiple speculative fixes at once.

## Context Efficiency

- Read only files relevant to the current task.
- Avoid repeatedly opening the same file.
- Do not inspect generated files, build outputs, dependencies, or vendor directories unless necessary.
- Prefer targeted searches over repository-wide exploration.
- Keep responses concise.

## Important

The user's explicit request takes priority over these general instructions.

When requirements are ambiguous and the ambiguity materially affects implementation, ask one concise clarification question.

Otherwise, make the most reasonable assumption and proceed. 