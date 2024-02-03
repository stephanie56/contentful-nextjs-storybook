// eslint-disable-next-line func-names
module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('component', {
    description: 'creates a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name (e.g. checkbox):',
      },
    ],
    actions: (answers) => {
      const actionsArray = [
        {
          type: 'add',
          path: '../components/ui/{{kebabCase name}}/index.ts',
          templateFile: './componentTemplate/index.hbs',
        },
        {
          type: 'add',
          path: '../components/ui/{{kebabCase name}}/{{kebabCase name}}.tsx',
          templateFile: './componentTemplate/component.hbs',
        },
        {
          type: 'add',
          path: '../components/ui/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
          templateFile: './componentTemplate/stories.hbs',
        },
      ];

      return actionsArray;
    },
  });
};