--[=[
	@class Client

	Main client script that initializes the player's client.
	This script runs when a player joins the game and sets up the client environment.
]=]

local Hello = require(game.ReplicatedStorage.Shared.Hello)

print("Hello world, from client!")
Hello.sayHello()
