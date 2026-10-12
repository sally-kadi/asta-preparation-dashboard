# MCP Integration

## Goal

The goal was to connect the coding agent to Google Stitch using the Model Context Protocol (MCP), allowing the agent to access the dashboard design during development.

## Tools and Workflow

- **Design tool:** Google Stitch
- **Coding environment:** Visual Studio Code
- **Application framework:** Next.js with TypeScript and Tailwind CSS
- **Intended protocol:** Model Context Protocol (MCP)

## Intended Workflow

1. Create the initial dashboard design in Google Stitch.
2. Refine the design and consider both desktop and mobile layouts.
3. Check whether a Stitch MCP integration is available to the coding environment.
4. Verify the connection with an actual successful tool call if access is available.
5. If the connection cannot be established, use screenshots or exported design files as visual references.

## Fallback Used

The dashboard was implemented in Visual Studio Code using the Stitch design as a visual reference. The design direction was dark fantasy, using black, gray, and purple, with a threat briefing, preparation progress, and three task cards.

The design reference helped guide the layout and visual styling during implementation.

## Verification Status

The MCP connection was not verified. No successful MCP connection or tool call is claimed in this submission.

The fallback workflow was used instead of relying on an unconfirmed integration.

## Limitations

- A direct MCP connection to Stitch was not confirmed.
- Screenshots and design references do not provide the same live access as a verified MCP integration.
- The dashboard was implemented and tested separately from the design tool.
- No credentials or secret tokens should be committed to the repository.

## Conclusion

The project continued using the available design references and the local coding environment. The MCP limitation was documented honestly, and the dashboard implementation did not depend on an unverified connection.
