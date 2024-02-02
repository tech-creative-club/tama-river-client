module.exports = (
    /**@type {import('plop').NodePlopAPI} */
    plop
) => {
    plop.setGenerator('component', {
        description: 'Create a Component And StoryFile',
        prompts: [
            {
                type: 'input',
                name: 'Component',
                message: 'Input the of the component name require PascalCase:',
            }
        ],
        actions: [
            {
                type: 'add',
                path: `./src/test/{{Component}}.tsx`,
                templateFile: './src/plop-template/component.tsx.hbs'
            },
            {
                type: 'add',
                path: `./src/test/{{Component}}.stories.ts`,
                templateFile: './src/plop-template/story.ts.hbs'
            }
        ]
    });
}