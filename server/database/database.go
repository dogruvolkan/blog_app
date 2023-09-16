package database

import (
	"log"

	"github.com/dogruvolkan/blogApp/model"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DBCon *gorm.DB

func ConnectDB() {
	dsn := "volkan:12345@tcp(127.0.0.1:3306)/blogapp_db?charset=utf8mb4&parseTime=True&loc=Local"

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Error),
	})

	if err != nil {
		panic("Database connection failed")
	}

	log.Println("Database connection successful")

	db.AutoMigrate(new(model.Blog))

	DBCon = db
}
