module.exports = {
  types: [
    { value: 'feat', name: '功能: 一个新的特性、功能' },
    { value: 'fix', name: '修复: 修复bug' },
    { value: 'refactor', name: '重构: 基于原有的功能进行升级迭代' },
    { value: 'docs', name: '文档: 文档变更' },
    { value: 'style', name: '格式: lint、空格, 分号等代码格式变更' },
    { value: 'build', name: '构建: 开发工具变动(构建、脚手架工具等)' },
    { value: 'perf', name: '性能: 性能优化、加载构建速度提升', },
    { value: 'test', name: '测试: 单元测试、集成测试修改' },
    { value: 'chore', name: '工程变更、版本号更新等' },
    { value: 'revert', name: '回滚: 代码回退' },
    { value: 'WIP', name: 'WIP: 进行中的工作' },
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  scopes: [
    { name: '构建' },
    { name: '依赖' },
    { name: '图标' },
  ],

  // it needs to match the value for field type. Eg.: 'fix'
  /*
   scopeOverrides: {
   fix: [

   {name: 'merge'},
   {name: 'style'},
   {name: 'e2eTest'},
   {name: 'unitTest'}
   ]
   },
   */
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型(必填)',
    customScope: '请输入文件修改的模块范围(必填)',
    subject: '请简要描述本次提交内容(必填)',
    body: '请输入变更的更长的描述(可选)。使用"|"换行:',
    breaking: '列出任何破坏性的更新(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确定进行本次提交？'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  // skipQuestions: ['scope', 'body'],

  // limit subject length
  subjectLimit: 120,
  // It is supported for fields body and footer.
  breaklineChar: '|',
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
}
