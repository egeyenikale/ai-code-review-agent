export const project = {
  slug: "ai-code-review-agent",
  title: "AI Code Review Agent",
  description: "Agent that reviews pull requests and summarizes risky changes.",
  features: [
  "Repository scan",
  "Diff analysis",
  "Risk scoring",
  "Review comments",
  "Summary report",
  "Policy checks"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
