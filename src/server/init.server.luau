--[=[
	@class Server

	Main server script that initializes the game server.
	This script runs when the server starts and sets up the game environment.
]=]

local Hello = require(game.ReplicatedStorage.Shared.Hello)

print("Hello world, from server!")
Hello.sayHello()
