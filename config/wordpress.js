module.exports = {
	extends: ['plugin:@wordpress/eslint-plugin/custom', './react'],
	settings: {
		'import/core-modules': [
			'@wordpress/block-editor',
			'@wordpress/components',
			'@wordpress/block-library',
			'@wordpress/editor',
			'@wordpress/element',
			'@wordpress/hooks',
			'@wordpress/html-entities',
			'@wordpress/icons',
			'@wordpress/blocks',
			'@wordpress/api-fetch',
			'@wordpress/dom-ready',
			'@wordpress/blob',
			'@wordpress/base-styles',
			'@wordpress/block-directory',
			'@wordpress/block-serialization-default-parser',
			'@wordpress/block-serialization-spec-parser',
			'@wordpress/compose',
			'@wordpress/core-data',
			'@wordpress/customize-widgets',
			'@wordpress/data-controls',
			'@wordpress/data',
			'@wordpress/date',
			'@wordpress/dom',
			'@wordpress/escape-html',
			'@wordpress/format-library',
			'@wordpress/i18n',
			'@wordpress/interface',
			'@wordpress/is-shallow-equal',
			'@wordpress/keycodes',
			'@wordpress/lazy-import',
			'@wordpress/list-reusable-blocks',
			'@wordpress/media-utils',
			'@wordpress/notices',
			'@wordpress/nux',
			'@wordpress/react-i18n',
			'@wordpress/priority-queue',
			'@wordpress/primitives',
			'@wordpress/react-native-aztec',
			'@wordpress/react-native-bridge',
			'@wordpress/redux-routine',
			'@wordpress/reusable-blocks',
			'@wordpress/rich-text',
			'@wordpress/server-side-render',
			'@wordpress/shortcod',
			'@wordpress/token-list',
			'@wordpress/url',
			'@wordpress/viewport',
			'@wordpress/warning',
			'@wordpress/wordcount',
			'react-dom',
			'react',
		],
	},
	globals: {
		window: true,
		document: true,
		wp: 'readonly',
		lodash: true,
	},
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 0,
		'@wordpress/dependency-group': 0,
		'@wordpress/no-unused-vars-before-return': 0,
		'import/no-unresolved': [2, { ignore: ['^@wordpress/'] }],
	},
};
