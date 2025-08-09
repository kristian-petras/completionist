--[=[
	@class Hello
	
	A simple Hello module that demonstrates basic Luau documentation with Moonwave.
	This module provides a greeting function that prints a message to the console.
]=]

local Hello = {}

--[=[
	@function sayHello
	@within Hello
	
	Prints a hello message to the console.
	
	```lua
	local Hello = require(ReplicatedStorage.Shared.Hello)
	Hello.sayHello() -- Prints: Hello, world!
	```
]=]
function Hello.sayHello()
	print("Hello, world!")
end

return Hello