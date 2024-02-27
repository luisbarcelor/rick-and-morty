//TODO: Review Babel config. Cannot parse test dependencies.

module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        ['@babel/preset-react', {runtime: 'automatic'}]
    ],
};