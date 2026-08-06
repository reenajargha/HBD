from django.shortcuts import render

def index(request):
    return render(request, 'suprise/index.html')

def birthday(request):
    return render(request, 'suprise/birthday.html')

def gift(request):
    return render(request, "suprise/index.html")