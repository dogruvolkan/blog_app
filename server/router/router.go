package router

import (
	"github.com/dogruvolkan/blogApp/controller"
	"github.com/gofiber/fiber/v2"
)

func SetupRotes(app *fiber.App) {

	//list => get
	//add => post
	//update => put
	//delete => delete

	app.Get("/", controller.BlogList)
	app.Get("/:id" ,controller.BlogRead)
	app.Post("/", controller.BlogCreate)
	app.Put("/:id", controller.BlogUpdate)
	app.Delete("/:id", controller.BlogDelete)
}
