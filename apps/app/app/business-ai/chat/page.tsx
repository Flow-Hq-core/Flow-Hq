import { Suspense } from "react";
import { AppShell } from "@/components/app-shell";
import { ChatConsole } from "@/components/business-ai/chat-console";

export default function BusinessAIChatPage() {
  return (
    <AppShell fullWidth>
      <Suspense fallback={null}>
        <ChatConsole />
      </Suspense>
    </AppShell>
  );
}
