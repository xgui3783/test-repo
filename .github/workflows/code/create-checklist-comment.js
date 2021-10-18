module.exports = async ({github, context}) => {
  const fs = require('fs')
  const { promisify } = require('util')
  const asyncReadFile = promisify(fs.readFile)
  const text = await asyncReadFile('./test.md', 'utf-8')
  github.rest.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: text
  })
}