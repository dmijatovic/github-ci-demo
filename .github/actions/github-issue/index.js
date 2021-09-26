const core = require("@actions/core");
const github = require("@actions/github");

try {
  const token = core.getInput("token");
  const title = core.getInput("title");
  const body = core.getInput("body");
  const assignTo = core.getInput("assign-to");

  core.notice(`github token: ${token}`);

  const octokit = new github.getOctokit(token);

  console.log("octokit.rest.issues..", JSON.stringify(octokit.rest.issues));

  core.notice("creating issue");
  // async - promise based request
  octokit.rest.issues
    .create({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      title,
      body,
      assignees: assignTo ? assignTo.split(",") : undefined,
    })
    .then((resp) => {
      core.notice("issue created");
      // provide issue object as stringified json
      core.setOutput("issue", JSON.stringify(response.data, null, 2));
    })
    .catch((e) => {
      core.warning("issue not created!");
      // notify github action about the error
      core.setFailed(`Failed to create issue: ${e.message}`);
    });
} catch (e) {
  // notify github action about the error
  core.setFailed(`Github-issue action failed: ${e.message}`);
}
