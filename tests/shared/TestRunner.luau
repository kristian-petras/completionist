-- Test utilities
local process = require("@lune/process")

local TestRunner = {}

function TestRunner.test(name, fn)
    print("Testing:", name)
    local success, err = pcall(fn)
    if success then
        print("✓ PASS")
    else
        print("✗ FAIL:", err)
        process.exit(1)
    end
end

return TestRunner
