# MCP Integration

## Goal

The goal is to connect the coding agent to Google Stitch using the Model Context Protocol (MCP), so the agent can access the dashboard design during development.

## Intended Workflow

1. Create the dashboard design in Google Stitch.
2. Save the initial design and the refined design.
3. Check whether an available Stitch MCP integration can connect to the coding agent.
4. If the connection works, document the setup and verify the connection with actual evidence.
5. If the connection is unavailable or cannot be completed, use the exported design or screenshots as visual references and document the limitation honestly.

## Design Reference

The project is **Asta's Preparation Dashboard**, a responsive dashboard for tracking Asta's preparation against Lucifero.

The visual direction is dark fantasy, using black, gray, and purple.

The design includes:
- A dashboard title and short introduction.
- A threat briefing about Lucifero.
- A preparation progress section with a percentage and completed-task count.
- Three preparation task cards with priorities, descriptions, and completion controls.
- Responsive layouts for desktop and mobile.

## Verification

The MCP connection must not be described as successful unless it has been tested and confirmed.

Evidence may include a successful connection result, relevant screenshots, or a documented fallback workflow.

## Current Status

The Stitch design has been generated. The MCP connection status has not yet been verified.

If MCP cannot be connected, the project will use Stitch screenshots or an exported design as the reference during implementation.

## Limitations

No credentials or secret tokens should be committed to the repository. The dashboard must remain within the assignment scope, and the design reference does not replace functional testing of the application.