""" Dashboard Views """

from django.shortcuts import render


############### general dashboard ###############
def dashboard(request):
    """Startseite"""

    context = {}

    response = render(request, "dashboard/dashboard.html", context)

    return response


def all_applications(request):
    """Alle Anträge"""

    context = {}

    response = render(request, "dashboard/all_applications.html", context)

    return response


############### single application ###############


### general ###
def application_documents(request, user_id):
    """Übersicht der Dokumente"""

    context = {}

    context["user_id"] = user_id

    response = render(request, "dashboard/application/general/documents.html", context)

    return response


def application_timeline(request, user_id):
    """Zeitplan"""

    context = {}

    context["user_id"] = user_id

    response = render(request, "dashboard/application/general/timeline.html", context)

    return response


def application_living_space(request, user_id):
    """Wohnraum"""

    context = {}

    context["user_id"] = user_id

    response = render(
        request, "dashboard/application/general/living_space.html", context
    )

    return response


def application_assisstance(request, user_id):
    """Betreuung"""

    context = {}

    context["user_id"] = user_id

    response = render(
        request, "dashboard/application/general/assisstance.html", context
    )

    return response


### evaluation ###
def application_career_evaluation(request, user_id):
    """Berufliche Vorerfahrungen bewerten"""

    context = {}

    context["user_id"] = user_id

    response = render(
        request, "dashboard/application/evaluation/career_evaluation.html", context
    )

    return response


def application_personality_evaluation(request, user_id):
    """Persönlichkeit bewerten"""

    context = {}

    context["user_id"] = user_id

    response = render(
        request, "dashboard/application/evaluation/personality_evaluation.html", context
    )

    return response


### more ###
def application_contact_person(request, user_id):
    """Ansprechpartner"""

    context = {}

    context["user_id"] = user_id

    response = render(request, "dashboard/application/more/contact_person.html", context)

    return response


def application_internal_communication(request, user_id):
    """Interne Kommunikation"""

    context = {}

    context["user_id"] = user_id

    response = render(request, "dashboard/application/more/internal_communication.html", context)

    return response


def application_notes(request, user_id):
    """Notizen"""

    context = {}

    context["user_id"] = user_id

    response = render(request, "dashboard/application/more/notes.html", context)

    return response
