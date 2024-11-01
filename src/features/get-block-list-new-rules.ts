import {
  blockListControllerGetList,
  BlockItemDtoType,
} from "@/shared/api/generated";
import {
  NetRule,
  NetRuleActionType,
  NetRuleResourceType,
} from "@/shared/lib/browser.chome";

export async function getBlockListNewRules() {
  const blockList = await blockListControllerGetList();

  return blockList.items
    .filter((item) => item.type === BlockItemDtoType.Website)
    .map(
      (item): NetRule => ({
        id: item.id,
        action: { type: NetRuleActionType.BLOCK },
        condition: item.data.startsWith("regexp:")
          ? {
              regexFilter: item.data.replace("regexp:", ""),
              resourceTypes: [NetRuleResourceType.MAIN_FRAME],
            }
          : {
              urlFilter: item.data,
              resourceTypes: [NetRuleResourceType.MAIN_FRAME],
            },
      })
    );
}
