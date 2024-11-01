import { ToggleBlockingButton } from "@/features/toggle-blocking/ui/toggle-blocking-button";
import { ADMIN_SIGN_IN } from "@/shared/constants/constants";
import { createTab } from "@/shared/lib/browser.chome";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLogo } from "@/shared/ui/ui-logo";

export function HomePage() {
  return (
    <div className="p-8 flex flex-col gap-3">
      <UiLogo />
      <ToggleBlockingButton />
      <UiButton
        variant="outlined"
        onClick={() => {
          createTab(ADMIN_SIGN_IN);
        }}
      >
        Manage extension
      </UiButton>
    </div>
  );
}
