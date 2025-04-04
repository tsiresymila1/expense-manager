/**
 * @type {import('@commitlint/types').UserConfig}
 */

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'refactor', 'test', 'ci', 'build', 'perf', 'update']],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
  },
};
