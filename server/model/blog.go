package model

import "time"

type Blog struct {
	ID        uint      `json:"id"  gorm:"primaryKey`
	Title     string    `json:"title" gorm:"not null; column:title; size:255`
	Author    string    `json:"author" gorm:"not null; column:author; size:100`
	Category  string    `json:"category" gorm:"not null; column:category; size:50`
	CreatedAt time.Time `json:"createdAt" gorm:"not null; column:createdAt; size:100`
	Post      string    `json:"post" gorm:"not null; column:post; size:255`
}
