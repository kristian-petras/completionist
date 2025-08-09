-- Tests for Math module
local Math = require("../src/shared/Math")
local TestRunner = require("shared/TestRunner")

local test = TestRunner.test

local function runMathTests()
    test("should add two numbers", function()
        assert(Math.add(2, 3) == 5, "2 + 3 should equal 5")
    end)

    test("should handle negative numbers", function()
        assert(Math.add(-1, 1) == 0, "-1 + 1 should equal 0")
    end)

    test("should handle zero", function()
        assert(Math.add(0, 5) == 5, "0 + 5 should equal 5")
    end)

    print("✅ Math module tests passed!")
end

return runMathTests
