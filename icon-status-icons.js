// import { registerSettings } from "./scripts/settings.js"
// import { ICON_CLASS_STATUSES, ICON_GENERIC_TAGS, ICON_RESOURCES, ICON_STATUSES } from "./scripts/icons.js";

/* ------------------------------------ */
/* Initialize system				          	*/
/* ------------------------------------ */
Hooks.once('setup', function() {
  console.log("Initializing ICON Status Icons module");
  // registerSettings();
  // setupIcons();
});

function setupIcons() {
  const keepStock = game.settings.get("icon-status-icons", "keepStockIcons");
  const classIcons = game.settings.get("icon-status-icons", "addClassIcons");
  const genericIcons = game.settings.get("icon-status-icons", "addGenericColorIcons");

  let statuses = [];
  // if (keepStock) statuses = statuses.concat(CONFIG.statusEffects);
  // if (genericIcons) statuses = statuses.concat(ICON_GENERIC_TAGS);
  // statuses.concat(ICON_STATUSES);
  // statuses.concat(ICON_RESOURCES);
  // if (classIcons) statuses = statuses.concat(ICON_CLASS_STATUSES);

  /**
   * An array of status effect icons which can be applied to Tokens
   * @type {Array}
   */
  CONFIG.statusEffects = statuses;
}
