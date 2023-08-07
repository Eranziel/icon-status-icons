
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

  game.settings.register("icon-status-icons", "addGenericColorIcons", {
    name: "Add Generic Color Statuses",
    hint: "Add a variety of generic color tag statuses",
    scope: "world",
    type: Boolean,
    config: true,
    default: false
  });


  game.settings.register("icon-status-icons", "addClassIcons", {
    name: "Add Class Statuses",
    hint: "Add a special status icon for each class",
    scope: "world",
    type: Boolean,
    config: true,
    default: false
  });


}
