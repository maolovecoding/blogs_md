const config = {
  "css.validate": true, // 校验css 方便 使用 Tailwind 特定的语法
  "tailwindCSS.includeLanguages": {
    "plaintext": "html,css,less,sass,javascript,vue",
    "html": "HTML",
    "javascript": "javascript",
    "vue": "HTML"
  },
  "todo-tree.tree.tagsOnly": true,
  "files.autoSave": "onWindowChange",
"liveServer.settings.donotShowInfoMsg": true,
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "files.autoSaveDelay": 500,
  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true // 编辑字符串 也有建议
  },
  "editor.tabSize": 2,
  "editor.renderWhitespace": "boundary",
  "emmet.excludeLanguages": ["markdown"],

  "[javascript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  // 启用/禁用字体连字("calt" 和 "liga" 字体特性)。
  // "editor.fontLigatures": false,
  "[typescript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "liveServer.settings.CustomBrowser": "chrome",
  "[jsonc]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  // 以下代码为注释颜色
  "editor.tokenColorCustomizations": {
    "comments": "#93ad9ae3", // 注释
    "keywords": "#06f2fa", // 关键字
    "variables": "#ae83ff", // 变量名
    "strings": "#3ce0aad4", // 字符串
    "functions": "#44f5abc9", // 函数名
    "numbers": "#f7713c", // 数字
    "types": "#00d9ff",
    "textMateRules": [
      {
        "scope": "meta.function-call",
        "settings": {
          "foreground": "#FF0000",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "storage.modifier",
        "settings": {
          "foreground": "#a64bc2"
          // "fontStyle": "bold"
        }
      },
      {
        "scope": "comment.block.documentation",
        "settings": {
          "foreground": "#32f1a8cb"
        }
      },
      {
        "scope": "variable.parameter",
        "settings": {
          "foreground": "#078cdae7",
          "fontStyle": "italic bold"
        }
      },
      {
        "scope": "constant.numeric.float",
        "settings": {
          "foreground": "#397fe9cb",
          "fontStyle": "italic"
        }
      },
      {
        "scope": "constant.numeric.integer",
        "settings": {
          "foreground": "#00a2ff",
          "fontStyle": "italic"
        }
      },
      {
        "scope": "meta.function-call",
        "settings": {
          "foreground": "#d1f311",
          "fontStyle": "italic"
        }
      },
      {
        // 内置函数
        "scope": "support.function",
        "settings": {
          "foreground": "#ffa175",
          "fontStyle": "bold"
        }
      },
      {
        // 内置 class
        "scope": "support.class",
        "settings": {
          "foreground": "#ddee46",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "support.constant",
        "settings": {
          "foreground": "#f7ae73",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "string.regexp",
        "settings": {
          "foreground": "#f861f1d5",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "entity.name.function",
        "settings": {
          "foreground": "#33a0d3",
          "fontStyle": "italic"
        }
      },
      {
        "scope": "meta.function",
        "settings": {
          "foreground": "#35bdfc"
          // "fontStyle": "italic"
        }
      },
      {
        "scope": "variable.other.readwrite",
        "settings": {
          "foreground": "#fdcbcbd2"
          // ,"fontStyle": "bold"
        }
      },
      {
        // || && & |
        "scope": "keyword.operator.logical",
        "settings": {
          "foreground": "#2e94f3c9",
          "fontStyle": "italic"
        }
      },
      {
        // new
        "scope": "keyword.operator.new",
        "settings": {
          "foreground": "#f7769cd3",
          "fontStyle": "bold italic"
        }
      },
      {
        // if else return等
        "scope": "keyword.control",
        "settings": {
          "foreground": "#7db7f8",
          "fontStyle": "italic"
        }
      },
      {
        // 算数操作符 + - * % /
        "scope": "keyword.operator.arithmetic",
        "settings": {
          "foreground": "#f87eda",
          "fontStyle": "bold italic"
        }
      },
      {
        // =
        "scope": "keyword.operator.assignment",
        "settings": {
          "foreground": "#f3f057",
          "fontStyle": "bold italic"
        }
      },
      {
        "scope": "string.quoted.double",
        "settings": {
          "foreground": "#7aea94be",
        }
      },
      {
        "scope": "string.quoted.single",
        "settings": {
          "foreground": "#4ad55abe",
        }
      },
      {
        "scope": "string.interpolated",
        "settings": {
          "foreground": "#4ad5c7be",
        }
      },
      {
        "scope": "meta.preprocessor",
        "settings": {
          "foreground": "#4a88d5be",
        }
      },
      {
        "scope": "variable.name",
        "settings": {
          "foreground": "#4aebe3",
        }
      },
      {
        "scope": "variable.language",
        "settings": {
          "foreground": "#4a88eb",
        }
      },
      {
        "scope": "variable.parameter",
        "settings": {
          "foreground": "#f0af5f",
        }
      },
      {
        "scope": "support.other",
        "settings": {
          "foreground": "#eb4abd",
        }
      },
      {
        "scope": "constant.character.escape",
        "settings": {
          "foreground": "#eb954a",
        }
      },
      {
        "scope": "entity.name.method",
        "settings": {
          "foreground": "#eb954a",
        }
      },
      {
        "scope": "entity.name.tag",
        "settings": {
          "foreground": "#ebbb4a",
        }
      },
      {
        "scope": "entity.other.attribute-name",
        "settings": {
          "foreground": "#da6969",
        }
      },
      {
        "scope": "entity.name.selector",
        "settings": {
          "foreground": "#69d4da",
        }
      },
      {
        "scope": "emphasis",
        "settings": {
          "foreground": "#7669da",
        }
      }
    ]
  },
  // 选中高亮的颜色
  "workbench.colorCustomizations": {
    "editor.selectionBackground": "#73e2fd46",
    "editor.findMatchBackground": "#d4fa4db7", //当前搜索匹配的颜色
    "editor.findMatchHighlightBackground": "#0c6be7", //其他搜索匹配项的颜色
    "editor.findRangeHighlightBackground": "#ff9900", //限制搜索范围的颜色
    "editor.lineHighlightBackground": "#9c9ae628", //光标所在行高亮内容的背景颜色
    "editor.lineHighlightBorder": "#68525254" //光标所在行四周边框的背景颜色
  },
  "html.format.templating": true,
  "emmet.triggerExpansionOnTab": true,
  "eslint.format.enable": true,
  "[vue]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "code-runner.executorMap": {
    "javascript": "node"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "explorer.confirmDelete": false,
  "code-runner.languageIdToFileExtensionMap": {
    "bat": ".bat",
    "powershell": ".ps1",
    "typescript": ".ts"
  },
  "turboConsoleLog.addSemicolonInTheEnd": true,
  "fileheader.Author": "毛毛",
  "fileheader.LastModifiedBy": "毛毛",
  "npm-intellisense.packageSubfoldersIntellisense": true,
  "npm-intellisense.scanDevDependencies": true,
  "terminal.integrated.defaultProfile.windows": "Command Prompt",
  "gitlens.defaultDateFormat": null,
  "gitlens.defaultDateShortFormat": null,
  "gitlens.defaultTimeFormat": null,
  "[typescriptreact]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "bookmarks.sideBar.expanded": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.iconTheme": "material-icon-theme",
  "editor.formatOnPaste": false,
  "editor.formatOnSave": true,
  "editor.formatOnType": false,
  "liveServer.settings.donotVerifyTags": true,
  "[markdown]": {
    "editor.defaultFormatter": "DavidAnson.vscode-markdownlint"
  },
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "editor.fontSize": 16,
  "bookmarks.saveBookmarksInProject": true,
  "javascript.inlayHints.parameterNames.suppressWhenArgumentMatchesName": false,
  "workbench.editor.splitInGroupLayout": "vertical",
  "typescript.format.placeOpenBraceOnNewLineForControlBlocks": true,
  "typescript.format.semicolons": "insert",
  "typescript.implementationsCodeLens.enabled": true,
  "typescript.inlayHints.enumMemberValues.enabled": true,
  "typescript.inlayHints.parameterNames.enabled": "literals",
  "typescript.locale": "zh-CN",
  "typescript.referencesCodeLens.showOnAllFunctions": true,
  "typescript.suggest.completeFunctionCalls": true,
  "codesnap.shutterAction": "copy",
  "[css]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "rm-js-comment.replacer": {
    "babel_runtime_corejs3_": "",
    "__WEBPACK": "",
    "__webpack_handle_async_dependencies__": "async_dependencies",
    "IMPORTED_MODULE_": "",
    "__WEBPACK_DEFAULT_EXPORT__": "DEFAULT_EXPORT",
    "__webpack_exports__": "exports",
    "__unused_webpack_module": "module",
    "__WEBPACK_EXTERNAL_MODULE_": "EXTERNAL_MODULE_",
    "__WEBPACK_DYNAMIC_EXPORT__": "DYNAMIC_EXPORT",
    "__system_context__": "system_context",
    "__webpack_require__": "require",
    "__webpack_module_cache__": "cache",
    "__webpack_modules__": "modules",
    "__WEBPACK_IMPORTED_MODULE_": "_IMPORTED_MODULE_",
    "/*#__PURE__*/": "",
    "___EXPOSE_LOADER_IMPORT___": "EXPOSE_IMPORT",
    "___EXPOSE_LOADER_GET_GLOBAL_THIS___": "GET_GLOBAL_THIS",
    "___EXPOSE_LOADER_GLOBAL_THIS___": "GLOBAL_THIS"
  },
  "[less]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "typescript.referencesCodeLens.enabled": true,
  "typescript.tsserver.experimental.enableProjectDiagnostics": true,
  "typescript.tsserver.maxTsServerMemory": 8192,
  "js/ts.implicitProjectConfig.target": "ESNext",
  "vitest.enable": true,
  "license.author": "maomao",
  "[yaml]": {
    "editor.defaultFormatter": "redhat.vscode-yaml"
  },
  "workbench.colorTheme": "Ayu Mirage",
  "errorLens.excludeBySource": [
    "ts(2307)"
  ],
  "vs-code-prettier-eslint.prettierLast": true,
  "files.maxMemoryForLargeFilesMB": 8192,
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true,
    "scminput": false
  },
  "terminal.integrated.defaultProfile.osx": "zsh",
  // "material-icon-theme.folders.associations": {
  //   "store": "/Users/didi/.vscode/extensions/icons/folder-pinia-store-open.svg"
  // }
  "editor.lineNumbers": "interval",
  "editor.fontWeight": 600, // Medium
  "editor.fontFamily": "'MapleMono-Bold', 'MapleMono-Regular', 'MapleMono-BoldItalic', 'MapleMono-Italic', Menlo, Monaco, 'Courier New', monospace",
  // 启动 箭头灯合在一起显示
  "editor.fontLigatures": "'cv01', 'cv02', 'cv03', 'cv04', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'zero', 'onum'"
}