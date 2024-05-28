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

        data = {}

        if "addEducation" in request.POST:

            education_id = request.POST.get('id')
            abschluss = request.POST.get('abschluss')
            institution = request.POST.get('institution')
            start_date = request.POST.get('start_date')
            end_date = request.POST.get('end_date')

            # Hier sollten Sie die Logik hinzufügen, um die Daten in der Datenbank zu speichern
            data = {
                "id": "1", # Hier sollte die ID des Datensatzes stehen, den Sie gerade erstellt haben
                'abschluss': abschluss,
                'institution': institution,
                'start_date': start_date,
                'end_date': end_date
            }

            return JsonResponse({
                'status': 'success',
                'data': data
            })

    return JsonResponse({'status': 'error'}, status=400)



@csrf_exempt
def upload_file(request):
    if request.method == 'POST':
        file = request.FILES.get('file')
        if file:
            file_name = default_storage.save(file.name, ContentFile(file.read()))
            file_size = file.size / (1024 * 1024)  # Size in MB
            response_data = {
                'filename': file.name,
                'filesize': round(file_size, 2)  # Round file size to 2 decimal places
            }
            return JsonResponse(response_data)
    return JsonResponse({'error': 'File upload failed'}, status=400)