from .choices import *
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

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



@csrf_exempt
def add_education(request):
    if request.method == 'POST':
        abschluss = request.POST.get('abschluss')
        institution = request.POST.get('institution')
        start_date = request.POST.get('start_date')
        end_date = request.POST.get('end_date')

        # Hier sollten Sie die Logik hinzufügen, um die Daten in der Datenbank zu speichern
        

        return JsonResponse({
            'status': 'success',
            'data': {
                'abschluss': abschluss,
                'institution': institution,
                'start_date': start_date,
                'end_date': end_date
            }
        })

    return JsonResponse({'status': 'error'}, status=400)