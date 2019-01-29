The Icon component is used to load SVG icons from the `/src/app/assets/svg` folder in the app. These icons are only used in that specific app. That is the reason why they are not in the UI library.

NOTE: This component requires the [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) dependency in the project.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/tree/master/src/components/icon/index.jsx" target="_blank">component implementation</a>

Usage:

`import IconName from '../../assets/svg/icon-name.svg';`

`<Icon glyph={IconName} />`
