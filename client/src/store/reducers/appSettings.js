import { SET_LANGUAGE } from "../actions";

const { default: Languages } = require("../../logic/AppSettings/Languages");

function language(_language = Languages.German, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.language;
    default:
      return _language;
  }
}

export default language;
