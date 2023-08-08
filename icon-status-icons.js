import { ICON_CLASS_STATUSES, ICON_GENERIC_TAGS, ICON_RESOURCES, ICON_STATUSES } from "./scripts/icons.js";

const stockIcons = [];

/* ------------------------------------ */
/* Initialize system				          	*/
/* ------------------------------------ */
Hooks.once('setup', function() {
  console.log("Initializing ICON Status Icons module");
  stockIcons.push(...CONFIG.statusEffects);
  registerSettings();
  setupIcons();
});

function setupIcons() {
  const keepStock = game.settings.get("icon-status-icons", "keepStockIcons");
  const classIcons = game.settings.get("icon-status-icons", "addClassIcons");
  const genericIcons = game.settings.get("icon-status-icons", "addGenericColorIcons");

  let statuses = [];
  if (keepStock) statuses = statuses.concat(stockIcons);
  if (genericIcons) statuses = statuses.concat(ICON_GENERIC_TAGS);
  statuses = statuses.concat(ICON_STATUSES);
  statuses = statuses.concat(ICON_RESOURCES);
  if (classIcons) statuses = statuses.concat(ICON_CLASS_STATUSES);

  /**
   * An array of status effect icons which can be applied to Tokens
   * @type {Array}
   */
  CONFIG.statusEffects = statuses;
}

function registerSettings() {
  /**
   * Keep or replace stock icons
   */
  game.settings.register("icon-status-icons", "keepStockIcons", {
    name: "Keep Stock Icons",
    hint: "Keep stock Foundry status icons. The icons enabled in this module will be added to the stock icons.",
    scope: "world",
    type: Boolean,
    config: true,
    default: false,
    onChange: setupIcons,
  });

  game.settings.register("icon-status-icons", "addGenericColorIcons", {
    name: "Add Generic Color Statuses",
    hint: "Add a variety of generic color tag statuses",
    scope: "world",
    type: Boolean,
    config: true,
    default: false,
    onChange: setupIcons,
  });

  game.settings.register("icon-status-icons", "addClassIcons", {
    name: "Add Class Statuses",
    hint: "Add a special status icon for each class",
    scope: "world",
    type: Boolean,
    config: true,
    default: false,
    onChange: setupIcons,
  });

}
