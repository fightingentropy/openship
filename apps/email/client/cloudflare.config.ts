import { bindings, defineConfig } from "cf/config";

export default defineConfig((ctx) => {
  switch (ctx.mode) {
    case "local": {
      return {
        worker: {
          name: "zero-local",
          compatibilityDate: "2025-06-27",
          observability: {
            enabled: true,
          },
          assets: {
            htmlHandling: "force-trailing-slash",
            notFoundHandling: "single-page-application",
          },
          env: {
            VITE_PUBLIC_BACKEND_URL: bindings.text("http://localhost:3030"),
            VITE_PUBLIC_APP_URL: bindings.text("http://localhost:3000"),
          },
        },
      };
    }
    case "staging": {
      return {
        worker: {
          name: "zero-staging",
          compatibilityDate: "2025-06-27",
          observability: {
            enabled: true,
          },
          assets: {
            htmlHandling: "force-trailing-slash",
            notFoundHandling: "single-page-application",
          },
          env: {
            VITE_PUBLIC_BACKEND_URL: bindings.text("https://sapi.0.email"),
            VITE_PUBLIC_APP_URL: bindings.text("https://staging.0.email"),
          },
        },
      };
    }
    case "production": {
      return {
        worker: {
          name: "zero-production",
          compatibilityDate: "2025-06-27",
          observability: {
            enabled: true,
          },
          assets: {
            htmlHandling: "force-trailing-slash",
            notFoundHandling: "single-page-application",
          },
          env: {
            VITE_PUBLIC_BACKEND_URL: bindings.text("https://api.0.email"),
            VITE_PUBLIC_APP_URL: bindings.text("https://0.email"),
          },
        },
      };
    }
    default: {
      return {
        worker: {
          name: "zero",
          compatibilityDate: "2025-06-27",
          observability: {
            enabled: true,
          },
          assets: {
            htmlHandling: "force-trailing-slash",
            notFoundHandling: "single-page-application",
          },
          env: {
            VITE_PUBLIC_BACKEND_URL: bindings.text("http://localhost:3030"),
            VITE_PUBLIC_APP_URL: bindings.text("http://localhost:3000"),
          },
        },
      };
    }
  }
});
