-- Main test entry point
local function runAllTests()
    print("🧪 Running tests...\n")

    -- Import and run test modules
    local mathTests = require("math.test")
    mathTests()

    print("\n🎉 All tests passed!")
end

runAllTests()
