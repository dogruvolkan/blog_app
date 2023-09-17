package main

import (
	"github.com/dogruvolkan/blogApp/database"
	router "github.com/dogruvolkan/blogApp/roter"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func init() {
	database.ConnectDB()
}

func main() {

	sqlDb, err := database.DBCon.DB()

	if err != nil {
		panic("Error in sql connection")
	}

	defer sqlDb.Close()

	app := fiber.New()

	app.Use(logger.New())

	router.SetupRotes(app)

	app.Listen(":8000")

}
