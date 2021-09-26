module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/dmijatovic/github-ci-demo",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    // "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
