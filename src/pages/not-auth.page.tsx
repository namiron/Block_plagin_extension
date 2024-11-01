import { ADMIN_SIGN_IN } from "@/shared/constants/constants";
import { createTab } from "@/shared/lib/browser.chome";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLogo } from "@/shared/ui/ui-logo";

export function NotAuthPage() {
  return (
    <div className="p-8 flex flex-col gap-3">
      <UiLogo />
      <h2 className="text-xl">You not authorized</h2>
      <UiButton
        variant="primary"
        onClick={() => {
          createTab(ADMIN_SIGN_IN);
        }}
      >
        Sign In
      </UiButton>
    </div>
  );
}
