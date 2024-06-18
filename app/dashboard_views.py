""" Dashboard Views """

from django.shortcuts import render

def dashboard(request):
    """ Startseite """

    context = {}

    response = render(request, 'dashboard/dashboard.html', context)

    return response

def all_applications(request):
    """ Alle Anträge """

    context = {}

    response = render(request, 'dashboard/all_applications.html', context)

    return response

def application_overview(request):
    """ Antragsübersicht """

    context = {}

    response = render(request, 'dashboard/application_overview.html', context)

    return response

def career_review(request):
    """ Bewerbung prüfen """

    context = {}

    response = render(request, 'dashboard/career_review.html', context)

    return response

def personal_review(request):
    """ Persönliche Daten prüfen """

    context = {}

    response = render(request, 'dashboard/personal_review.html', context)

    return response

def timeplan(request):
    """ Zeitplan """

    context = {}

    response = render(request, 'dashboard/timeplan.html', context)

    return response
