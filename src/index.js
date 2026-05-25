#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";
const main = async () => {
    // 1. Proje adını sor
    const { projectName } = await inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "Enter project name:",
            default: "my-chrome-extension",
        },
    ]);
    // 2. Create folder
    const targetDir = path.resolve(process.cwd(), projectName);
    if (fs.existsSync(targetDir)) {
        console.log("A folder with this name already exists!");
        return;
    }
    await fs.mkdir(targetDir);
    console.log(`Folder created: ${targetDir}`);
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const templateDir = path.resolve(__dirname, "../template");
    await fs.copy(templateDir, targetDir);
    console.log("Template files copied!");
    // Update package.json name
    const pkgPath = path.join(targetDir, "package.json");
    if (await fs.pathExists(pkgPath)) {
        const pkg = await fs.readJson(pkgPath);
        pkg.name = projectName;
        await fs.writeJson(pkgPath, pkg, { spaces: 2 });
    }
    const { runInstall } = await inquirer.prompt([
        {
            type: "confirm",
            name: "runInstall",
            message: "Do you want to run npm install now?",
            default: true,
        },
    ]);
    if (runInstall) {
        console.log("Running npm install...");
        exec("npm install", { cwd: targetDir }, (error, stdout, stderr) => {
            if (error) {
                console.error("Error occurred during npm install:", error.message);
                return;
            }
            console.log(stdout);
            console.log("npm install completed!");
        });
    }
    else {
        console.log("You can run the following commands manually to complete the setup:");
        console.log(`cd ${projectName}`);
        console.log("npm install");
    }
};
main();
//# sourceMappingURL=index.js.map