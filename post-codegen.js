/* eslint-disable no-console */
const fs = require("fs");
const { glob } = require("glob");
// Function to modify the contents of a file
const modifyFile = (filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${filePath}:`, err);
      return;
    }

    let modifiedData = data;

    // Add ESLint disable comments
    if (
      !modifiedData.includes(
        "/* eslint-disable @typescript-eslint/naming-convention */",
      )
    ) {
      modifiedData = `/* eslint-disable @typescript-eslint/naming-convention */\n${modifiedData}`;
    }
    if (!modifiedData.includes("/* eslint-disable react/display-name */")) {
      modifiedData = `/* eslint-disable react/display-name */\n${modifiedData}`;
    }
    if (!modifiedData.includes("/* eslint-disable import/no-duplicates */")) {
      modifiedData = `/* eslint-disable import/no-duplicates */\n${modifiedData}`;
    }

    // Change all ', options);' to ', options as any);'
    modifiedData = modifiedData.replace(
      /Document,\s?(\n.*)?options/gm,
      "Document, options as any",
    );

    // Write the modified content back to the file
    fs.writeFile(filePath, modifiedData, "utf8", (writeErr) => {
      if (writeErr) {
        console.error(`Error writing ${filePath}:`, writeErr);
      } else {
        console.log(`${filePath} has been modified successfully.`);
      }
    });
  });
};
// Define the pattern for files generated by graphql-codegen
const GENERATED_FILES_PATTERN = "./src/lib/graphql/helpers/*.{ts,tsx}";
const run = async () => {
  // Use the glob package to find all files that match the pattern
  (await glob(GENERATED_FILES_PATTERN)).forEach((file) => {
    modifyFile(file);
  });
};

run();
