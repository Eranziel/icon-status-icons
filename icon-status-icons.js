import { registerSettings } from "./scripts/settings.js"
import { archerIcons } from "./scripts/icons.js";

/* ------------------------------------ */
/* Initialize system				          	*/
/* ------------------------------------ */
Hooks.once('setup', async function() {
  console.log("Initializing ICON Status Icons module");
  registerSettings();
  setupIcons();
});

function setupIcons() {
  const keepStock = game.settings.get("icon-status-icons", "keepStockIcons");

  let statuses = [];
  if (keepStock)    statuses = statuses.concat(CONFIG.statusEffects);
  statuses = statuses.concat(archerIcons);

  /**
   * An array of status effect icons which can be applied to Tokens
   * @type {Array}
   */
  CONFIG.statusEffects = statuses;
}
