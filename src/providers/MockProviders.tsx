import { useEffect, useState } from "react";

/**
 * part of enabling MSW on client side
 * src: https://github.com/mswjs/examples/blob/40ce6d7ace4438eaa49043778d2ae3fcf1d9137a/examples/with-next/app/mockProvider.tsx
 * PR link: https://github.com/mswjs/examples/pull/101
 */
export function MockProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const waitUntilEnabled = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";
  const [mockingEnabled, enableMocking] = useState(false);

  useEffect(() => {
    async function enableApiMocking() {
      /**
       * @fixme Next puts this import to the top of
       * this module and runs it during the build
       * in Node.js. This makes "msw/browser" import to fail.
       */
      const { worker } = await import("@import/lib/mocks/msw-browser");
      await worker.start({
        onUnhandledRequest: "bypass",
      });
      enableMocking(true);
    }

    if (waitUntilEnabled) {
      enableApiMocking();
    }
  }, [waitUntilEnabled]);

  if (!mockingEnabled && waitUntilEnabled) {
    return null;
  }

  return <>{children}</>;
}
