module.exports = {
	"extends": "airbnb",
	"rules": {
		"linebreak-style": 0,
    "react/prop-types": 0,
    "comma-dangle": ["error", "never"],
    "camelcase": 0,
    "max-len": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to", "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }]
	},
	"globals": {
		"document": true,
		"window": true,
	},
	"env": {
		"jest": true
	}
}
