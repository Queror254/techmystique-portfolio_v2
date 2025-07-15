import os

project_name = "tnc-summarizer-wxt-firebase-gemini"
base_dir = f"/mnt/data/{project_name}"

# Define folder structure
folders = [
    ".output", ".wxt", "public", "functions", 
    "src/assets", "src/components", "src/composables",
    "src/entrypoints/content-scripts", "src/entrypoints/popup",
    "src/hooks", "src/utils"
]

# Create folders
for folder in folders:
    os.makedirs(os.path.join(base_dir, folder), exist_ok=True)

# Create placeholder files
files = {
    ".env": "",
    ".env.publish": "",
    "package.json": '{\n  "name": "tnc-summarizer-wxt-firebase-gemini"\n}',
    "tsconfig.json": "{}",
    "web-ext.config.ts": "// web extension startup config",
    "wxt.config.ts": """
import { defineConfig } from 'wxt';

export default defineConfig({
  srcDir: 'src',
  entrypointsDir: 'entrypoints',
  modulesDir: 'modules',
  outDir: '.output',
  publicDir: 'public',
  manifest: {
    name: 'T&C Summarizer',
    version: '0.1',
    manifest_version: 3,
    permissions: ['scripting', 'tabs'],
    action: {
      default_popup: 'popup/index.html',
    },
    content_scripts: [
      {
        matches: ['<all_urls>'],
        js: ['content-scripts/scraper.ts'],
      },
    ],
  },
});
""",
    "src/app.config.ts": "// optional runtime config",
    "src/utils/summarizeClient.ts": "// Gemini fetch logic",
    "src/entrypoints/content-scripts/scraper.ts": "// T&C scraper logic",
    "src/entrypoints/popup/Popup.tsx": "// Popup UI logic"
}

# Write files
for file_path, content in files.items():
    full_path = os.path.join(base_dir, file_path)
    with open(full_path, "w") as f:
        f.write(content)

base_dir
