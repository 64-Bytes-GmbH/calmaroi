from .choices import *

""" Views """

from django.shortcuts import render

####################### General Pages #######################
def home(request): #!
    """ Startseite """

    context = {}

    response = render(request, 'app/index.html', context)

    return response


def persoenlicheinfos(request):
    """persoenlicheinfos"""

    context = {}

    response = render(request, "app/persoenlicheinfos.html", context)

    return response

def bildungsweg(request):
    """Bildungsweg"""

    context = {}

    response = render(request, "app/bildungsweg.html", context)

    return response
  
def dokumente(request):
    """Dokumente"""

    context = {}

    response = render(request, "app/dokumente.html", context)

    return response

def fragebogen(request):
    """Fragebogen"""

    context = {}

    response = render(request, "app/fragebogen.html", context)

    return response

def datenschutz(request):
    """Datenschutz"""

    context = {}

    response = render(request, "app/datenschutz.html", context)

    return response

def uebersicht(request):
    """Übersicht"""

    context = {}

    response = render(request, "app/uebersicht.html", context)

    return response



    