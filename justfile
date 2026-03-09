node := "bun"
tstl := "node_modules/typescript-to-lua/dist/tstl.js"

build:
    {{node}} "{{tstl}}"

watch:
    watchexec just build
