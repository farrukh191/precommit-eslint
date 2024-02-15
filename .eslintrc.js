// .eslintrc.js

module.exports = {
  extends: ["react-app", "react-app/jest"],
  rules: {
    "no-console": "off",
    "no-unused-vars": ["error", { args: "none" }],
  },
};
