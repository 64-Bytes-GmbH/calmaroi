"""Dashboard urls."""

from django.urls import path
from app import dashboard_views as views

urlpatterns = [
    ######### general dashboard #########
    path(
        "", 
        views.dashboard,
        name="dashboard"
    ),
    path(
        "Bewerbungen/",
        views.all_applications,
        name="all_applications"
    ),

    ######### single application #########
    # general
    path(
        "Bewerbung/<int:user_id>/Unterlagen/",
        views.application_documents,
        name="application_documents",
    ),
    path(
        "Bewerbung/<int:user_id>/Zeitplan/", 
        views.application_timeline,
        name="application_timeline"
    ),
    path(
        "Bewerbung/<int:user_id>/Wohnraum/", 
        views.application_living_space,
        name="application_living_space"
    ),
    path(
        "Bewerbung/<int:user_id>/Betreuung/", 
        views.application_assisstance,
        name="application_assisstance"
    ),
    # evaluation
    path(
        "Bewerbung/<int:user_id>/Berufliche-Vorerfahrungen",
        views.application_career_evaluation,
        name="application_career_evaluation",
    ),
    path(
        "Bewerbung/<int:user_id>/Persönlichkeit/",
        views.application_personality_evaluation,
        name="application_personality_evaluation",
    ),
    # more
    path(
        "Bewerbung/<int:user_id>/Ansprechpartner/", 
        views.application_contact_person,
        name="application_contact_person"
    ),
    path(
        "Bewerbung/<int:user_id>/Interne-Kommunikation/", 
        views.application_internal_communication,
        name="application_internal_communication"
    ),
    path(
        "Bewerbung/<int:user_id>/Notizen/", 
        views.application_notes,
        name="application_notes"
    ),
]
