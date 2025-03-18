package config

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

// ConnectDB เชื่อมต่อฐานข้อมูลและคืนค่า *sql.DB
func ConnectDB() (*sql.DB, error) {
	dsn := "root:password@tcp(127.0.0.1:3306)/issue_tracker"
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		return nil, fmt.Errorf("failed to connect to database: %w", err)
	}

	// ตรวจสอบการเชื่อมต่อ
	if err := db.Ping(); err != nil {
		db.Close()
		return nil, fmt.Errorf("database is unreachable: %w", err)
	}

	fmt.Println("Connected to Database")
	return db, nil
}
