import {
  accountControllerGetAccount,
  authControllerGetSessionInfo,
} from "@/shared/api/generated";
import { senNetRules, setBrowserInterval } from "@/shared/lib/browser.chome";
import { getBlockListNewRules } from "./get-block-list-new-rules";

export function startUpdateBlockRules() {
  setBrowserInterval("update-block-roles", 5 * 1000, async () => {
    const isAuth = await authControllerGetSessionInfo().then(
      () => true,
      () => false
    );
    if (!isAuth) {
      return await senNetRules([]);
    }

    const isBlockingEnabled = await accountControllerGetAccount().then(
      (r) => r.isBlockingEnabled
    );

    if (!isBlockingEnabled) {
      return await senNetRules([]);
    }
    senNetRules(await getBlockListNewRules());
  });
}
