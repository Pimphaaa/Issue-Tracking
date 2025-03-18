package routes

import (
	"net/http"
	"backend/controllers"
)

func RegisterRoutes() {
	http.HandleFunc("/statistics", controllers.GetStatistics) // API สำหรับสถิติ
}
