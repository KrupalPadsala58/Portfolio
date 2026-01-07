import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";

export default [
    {
        ignores: [".next/**", "node_modules/**", "dist/**"],
    },
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            "react": reactPlugin,
            "react-hooks": reactHooksPlugin,
            "@next/next": nextPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            "react/react-in-jsx-scope": "off", // Next.js doesn't need React in scope
            "no-undef": "off", // TypeScript already handles this, and it causes false positives in Flat Config
            "react-hooks/set-state-in-effect": "off", // This rule is too restrictive for hydration patterns
            // Add other Next.js specific rule overrides if needed
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];
