import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,

  name: "Chromify - Chrome Extension Template",

  version: "1.0.0",

  description: "A modern Chrome extension boilerplate built with React, Vite, and TypeScript. Easily kickstart your next browser extension project.",
  icons: {
    "16": "public/assets/icon16.png",
    "32": "public/assets/icon32.png",
    "48": "public/assets/icon48.png",
    "128": "public/assets/icon128.png"
  },

  action: {
    default_popup: "index.html",
  },

  permissions: ["storage", "activeTab"],

  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/contentScript.ts"],
    },
  ],

  background: {
    service_worker: "src/background.ts"
  },
});