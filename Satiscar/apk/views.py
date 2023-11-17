from django.shortcuts import render

# Create your views here.

def paginaApk(request):
    return render(request, 'apk/paginaApk.html')