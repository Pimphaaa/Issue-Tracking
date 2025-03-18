package routes

import (
	"net/http"
	"backend/controllers"
)

func RegisterRoutes() {
	http.HandleFunc("/issues", controllers.GetIssues)
	http.HandleFunc("/issues/create", controllers.CreateIssue)
}
