"""Dashboard urls."""

from django.urls import path
from app import dashboard_views as views

urlpatterns = [
    path("", views.dashboard, name="dashboard"),
    path("Bewerbungen/", views.all_applications, name="all_applications"),
    path(
        "Bewerbung/<str:user_id>/User-Profile/",
        views.application_overview,
        name="application_overview",
    ),
    path("Bewerbung/<str:user_id>Zeitplan/", views.career_review, name="career_review"),
    path(
        "Bewerbung/<str:user_id>/Berufliche-Vorerfahrungen",
        views.personal_review,
        name="personal_review",
    ),
    path("Bewerbung/<str:user_id>/Persönlichkeit", views.timeplan, name="timeplan"),
]
