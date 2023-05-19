from django.shortcuts import render,HttpResponse
import cv2

# Create your views here.

def index(request):
    return render(request,"index.html")

def detect(request):
    cap=cv2.VideoCapture(0)
    while True:
        rel, frames = cap.read()
        cv2.imshow("video",frames)
        if cv2.waitKey(1) == 27:
            break
    cap.release()
    cv2.destroyAllWindows()
    return render(request,"index.html")
    
    
    