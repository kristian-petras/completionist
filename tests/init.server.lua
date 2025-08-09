--[=[
	@class TestRunner

	Main test runner that executes all tests and reports results.
	This script should be run in a Roblox server environment.

	Usage: Place this in ServerScriptService and run the game to execute tests.
]=]

local TestEZ = require(game.ReplicatedStorage.Packages.TestEZ)

print("🧪 Starting TestEZ test runner...")

-- Import all test modules
local testModules = {
    script.shared["Hello.spec"],
}

print("📝 Found " .. #testModules .. " test module(s)")

-- Run tests with TestEZ
local success, results = pcall(function()
    return TestEZ.TestBootstrap:run(testModules, {
        extraEnvironment = {
            -- Add any global test utilities here if needed
        },
    })
end)

-- Handle results and report
if not success then
    error("❌ Test runner failed to execute: " .. tostring(results))
elseif results.failureCount > 0 then
    local message = string.format(
        "❌ Tests failed: %d passed, %d failed, %d skipped",
        results.successCount,
        results.failureCount,
        results.skippedCount or 0
    )
    print(message)
    error(message)
else
    local message = string.format("✅ All tests passed! %d tests completed successfully", results.successCount)
    print(message)
end

print("🏁 Test execution completed")
