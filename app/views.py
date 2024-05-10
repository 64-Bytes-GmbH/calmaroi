""" Views """

from django.shortcuts import render

####################### General Pages #######################
def home(request): #!
    """ Startseite """

    context = {}

    response = render(request, 'app/index.html', context)

    return response
