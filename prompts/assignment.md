# UI/UX Assignment — Design-to-Code with Figma MCP and VS Code

Complete the entire assignment independently, using Figma MCP, VS Code, browser access, and terminal tools.

## 1. Project concept

Create a premium international real estate platform called **MAISON**.

Design requirements:
- Minimalistic Apple-inspired design.
- Premium and modern visual identity.
- High-quality architectural photography.
- Clean typography and generous spacing.
- Neutral color palette.
- All interface content must be in English.
- Responsive desktop and mobile layouts.

The landing page should include:
- Navigation bar.
- Hero section.
- Property search and filters.
- Featured luxury properties.
- Popular destinations.
- Property cards.
- Call-to-action section.
- Footer.

## 2. Figma design — Version 1

Create a new Figma file named `MAISON — Design to Code`.

Create the following pages:
- `01_Design_V1`
- `02_Design_V2`
- `03_Design_System`
- `04_Comparison`
- `05_Reverse_MCP`

Create the initial landing page using native, editable Figma layers.

Include all mandatory assignment requirements:
- Components and component variants.
- Color variables and typography styles or tokens.
- Auto Layout.
- Meaningful layer names.
- Reusable buttons, inputs, navigation elements and property cards.

Keep the initial design visually professional, but preserve its actual structure for the first evaluation. Do not artificially introduce mistakes or fabricate differences.

## 3. Configure Figma MCP in VS Code

Connect VS Code to the official remote Figma MCP server:

`https://mcp.figma.com/mcp`

Use the official documentation:
- https://www.figma.com/mcp-catalog/
- https://help.figma.com/hc/en-us/articles/39890361040535-VS-Code-and-Figma-Set-up-the-MCP-server
- https://help.figma.com/hc/en-us/articles/35281350665623
- https://github.com/figma/mcp-server-guide

Verify that GitHub Copilot is available and enabled.

Complete Figma authentication if possible and verify MCP connectivity using `#get_design_context` in VS Code.

Use the actual Figma MCP tools to retrieve design context, components, variables and layout information.

Capture screenshots proving successful MCP configuration and usage.

If manual authentication or account permissions are required, ask me to complete only those specific actions.

Do not simulate MCP usage or fabricate evidence.

## 4. Generate website — Version 1

Use the Figma Version 1 frame link as the source for code generation through MCP.

Technology stack:
- React
- TypeScript
- Tailwind CSS
- Vite

Requirements:
- Match the original Figma design.
- Use reusable React components.
- Implement responsive layouts.
- Make navigation, search and filtering work with sample property data.
- Ensure there are no console errors.
- Use appropriate semantic HTML.

Save the complete first version in the `version-1` directory.

Save the exact prompts used during generation.

Run the website locally and capture desktop and mobile screenshots.

Do not overwrite Version 1 during later iterations.

## 5. Analyze differences

Compare the original Figma design with the first generated website.

Analyze:
- Colors.
- Typography.
- Font sizes and weights.
- Spacing and padding.
- Component dimensions.
- Alignment.
- Border radius.
- Image proportions.
- Responsive behavior.
- Component reusability.
- Code structure.
- Design-token usage.

Create a comparison table containing:
- Criterion.
- Expected Figma result.
- Actual generated result.
- Identified difference.
- Possible reason.
- Proposed improvement.

Place actual Figma and browser screenshots side by side.

Use real observations and measurements. Do not invent results.

## 6. Improve Figma — Version 2

Duplicate the original design into `02_Design_V2`.

Improve the design structure based on the identified problems.

Focus on:
- Consistent Auto Layout.
- Clear and semantic layer naming.
- Proper component variants.
- Reusable components.
- Semantic color variables.
- Typography tokens.
- Consistent spacing.
- Responsive resizing constraints.
- Component properties.
- Reduced unnecessary nesting.

Create a complete mini design system on the `03_Design_System` page.

Include:
- Primary, secondary and outline buttons.
- Button interaction variants.
- Input fields.
- Search components.
- Property cards.
- Navigation components.
- Color palette.
- Typography system.
- Spacing system.
- Border-radius tokens.

Keep the visual appearance of both versions reasonably consistent so that the experiment measures the effect of design structure rather than a completely different visual design.

All Figma elements must remain editable.

## 7. Generate website — Version 2

Use the improved Figma design and actual MCP context to generate the website again.

Use the same technology stack and substantially the same generation prompt to ensure a fair comparison.

Save the second version in the `version-2` directory.

Ensure:
- Accurate reproduction of the improved Figma design.
- Responsive desktop, tablet and mobile layouts.
- Correct use of design tokens.
- Reusable React components.
- Clean code structure.
- Working interface interactions.
- No build or console errors.

Run and test the website.

Capture new desktop and mobile screenshots using the same viewport sizes as Version 1.

Compare both code versions and explain what actually improved.

## 8. Reverse direction — Bonus task

Use the official Figma MCP reverse workflow, if available, to send the final coded website back to Figma as native, editable layers.

Place the result on `05_Reverse_MCP`.

Analyze:
- Layer structure.
- Editability.
- Auto Layout.
- Components.
- Naming.
- Visual accuracy.

Capture screenshots of the imported result.

If the reverse workflow is unavailable, document the actual limitation instead of pretending it was completed.

## 9. GitHub repository

Prepare a repository named `maison-design-to-code`.

Use the following structure:

```text
maison-design-to-code/
├── version-1/
├── version-2/
├── screenshots/
│   ├── figma-v1/
│   ├── figma-v2/
│   ├── website-v1/
│   ├── website-v2/
│   ├── mcp-setup/
│   ├── comparison/
│   └── reverse-mcp/
├── prompts/
│   ├── design-v1.md
│   ├── generation-v1.md
│   ├── design-improvement.md
│   ├── generation-v2.md
│   └── reverse-mcp.md
├── report/
├── README.md
└── .gitignore
```

Create a professional README containing:
- Project overview.
- Assignment objective.
- Figma file link.
- Technology stack.
- MCP setup instructions.
- Installation and launch instructions.
- Version comparison.
- Screenshots.
- Main conclusions.

Create meaningful Git commits corresponding to the actual stages of work.

Publish the repository to GitHub using my authenticated account if access is available.

Never include passwords, API keys, authentication tokens or other credentials.

## 10. Final report

Create a professional PDF report of approximately 8–12 pages in English.

Include:
1. Title page.
2. Project overview and objective.
3. Initial Figma design.
4. Figma MCP configuration and evidence.
5. First code generation.
6. Before-improvement comparison table.
7. Figma design-system improvements.
8. Second code generation.
9. Before-and-after comparison.
10. Reverse MCP workflow and analysis.
11. Exact prompts used.
12. Conclusions and AI-use disclosure.

Use actual screenshots from Figma, VS Code and the running website.

Explain why Components, Variables, Auto Layout and semantic layer names affect AI-generated code quality.

Use a clean academic report layout with consistent typography, page numbers, captions and well-organized tables.

## 11. Prepare for defense

Create a separate `DEFENSE.md` file containing 15–20 likely teacher questions and short answers in both Russian and English.

Include questions about:
- What Figma MCP is.
- How MCP connects Figma and VS Code.
- Components and variants.
- Variables and design tokens.
- Auto Layout.
- Semantic layer names.
- Differences between Version 1 and Version 2.
- Why the generated code improved or did not improve.
- Responsive design.
- Reverse MCP workflow.

## 12. Final quality checklist

Before finishing, verify that every grading criterion is covered:

- Design and design-system quality — 30 points.
- MCP setup and use — 15 points.
- Accuracy of the final code — 20 points.
- Analysis of differences and iteration — 25 points.
- Defense preparation — 10 points.

Complete as much of the assignment as possible independently. Do not stop after creating a plan or providing instructions.

Use the browser, Figma MCP, VS Code and terminal wherever necessary.

Do not modify unrelated projects or files.

At the end, provide:
- Figma file link.
- GitHub repository link.
- Final PDF report.
- Defense preparation file.
- Summary of actual completed tasks.
- Any limitations or incomplete requirements.
- A clear list of what I need to upload to Canvas.