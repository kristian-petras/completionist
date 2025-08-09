--[=[
	@class HelloTests

	Unit tests for the Hello module demonstrating TestEZ usage patterns.
	Tests basic functionality and module structure validation.
]=]

local TestEZ = require(game.ReplicatedStorage.Packages.TestEZ)
local Hello = require(game.ReplicatedStorage.Shared.Hello)

return function()
    describe("Hello Module", function()
        describe("sayHello function", function()
            it("should exist and be callable", function()
                expect(Hello.sayHello).to.be.a("function")
                expect(function()
                    Hello.sayHello()
                end).never.to.throw()
            end)

            it("should be idempotent (callable multiple times)", function()
                expect(function()
                    Hello.sayHello()
                    Hello.sayHello()
                    Hello.sayHello()
                end).never.to.throw()
            end)

            it("should not return a value", function()
                local result = Hello.sayHello()
                expect(result).to.equal(nil)
            end)
        end)

        describe("module structure", function()
            it("should be a table", function()
                expect(Hello).to.be.a("table")
            end)

            it("should export expected functions", function()
                expect(Hello.sayHello).to.be.ok()
            end)

            it("should not expose unexpected properties", function()
                local expectedKeys = { "sayHello" }
                local actualKeys = {}

                for key, _ in pairs(Hello) do
                    table.insert(actualKeys, key)
                end

                expect(#actualKeys).to.equal(#expectedKeys)

                for _, expectedKey in ipairs(expectedKeys) do
                    expect(Hello[expectedKey]).to.be.ok()
                end
            end)
        end)
    end)
end
