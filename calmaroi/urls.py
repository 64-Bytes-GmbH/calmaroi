"""
URL configuration for calmaroi project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from django.conf.urls.static import static
from django.conf import settings
from app import views

urlpatterns = [

    path('admin/', admin.site.urls),

    # General Pages
    path('', views.home, name='home'),
    path("persoenlicheinfos/", views.persoenlicheinfos, name="persoenlicheinfos"),
    path("bildungsweg/", views.bildungsweg, name="bildungsweg"),
    path("dokumente/", views.dokumente, name="dokumente"),
    path("fragebogen/", views.fragebogen, name="fragebogen"),
    path("datenschutz/", views.datenschutz, name="datenschutz"),
    path("uebersicht/", views.uebersicht, name="uebersicht"),
    path('add-education/', views.add_education, name='add_education'),
    path('upload-file/', views.upload_file, name='upload_file'),



    # Account
    path("accounts/", include("django.contrib.auth.urls")),

]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT,
    )
