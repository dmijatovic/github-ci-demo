const core = require("@actions/core");
const github = require("@actions/github");
const { GitHub } = require("@actions/github/lib/utils");

try {
  const token = core.getInput("token");
  const title = core.getInput("title");
  const body = core.getInput("body");
  const assignTo = core.getInput("assign-to");

  // use to communicate to Github (instead of api with fetch/axios)
  const octokit = new GitHub.GitHub(token);
  // create new issue
  const resp = octokit.issues.create({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    title,
    body,
    assignees: assignTo ? assignTo.split(",") : undefined,
  });
  // provide issue object as stringified json
  core.setOutput("issue", JSON.stringify(response.data, null, 2));
} catch (e) {
  // notify github action about the error
  core.setFailed(`Github-issue action failed: ${e.message}`);
}
