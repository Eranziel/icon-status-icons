
export const registerSettings = function() {
  /**
   * Keep or replace stock icons
   */
  game.settings.register("icon-status-icons", "keepStockIcons", {
    name: "Keep Stock Icons",
    hint: "Keep stock Foundry status icons. The icons enabled in this module will be added to the stock icons.",
    scope: "world",
    type: Boolean,
    config: true,
    default: false
  });

}
