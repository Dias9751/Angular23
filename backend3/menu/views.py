from django.shortcuts import render

# Create your views here.
import json

from rest_framework.permissions import IsAuthenticated

from django.shortcuts import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework_jwt.settings import api_settings

from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from menu.models import Category, Product, Restaurant, Delivery, Customer
from menu.serializers import CategorySerializer3, CategorySerializer, CategorySerializer2, ProductSerializer, ProductSerializer2, RestaurantSerializer, DeliverySerializer, CustomerSerializer



class DeliveryListAPIView(APIView):
    def get(self, request):
        delivery = Delivery.objects.all()
        serializer = DeliverySerializer(delivery, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = DeliverySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RestaurantListAPIView(APIView):
    def get(self, request):
        restaurant = Restaurant.objects.all()
        serializer = RestaurantSerializer(restaurant, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = RestaurantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryListAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer2(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = CategorySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    permission_classes = (IsAuthenticated,)


class CustomerListAPIView(APIView):
    def get(self, request):
        customer = Customer.objects.all()
        serializer = CustomerSerializer(customer, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def category_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer3(categories, many=True)
    return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CategorySerializer2(category)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = CategorySerializer2(instance=category, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    elif request.method == 'DELETE':
        category.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


@csrf_exempt
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    serializer = ProductSerializer(product)
    return JsonResponse(serializer.data)

@csrf_exempt
def category_detail_product(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    produc = category.product_set.all()
    serializer = ProductSerializer(produc, many = True)
    return JsonResponse(serializer.data, safe = False)

@csrf_exempt
def restaurant_detail(request, restaurant_id):
    try:
        restaurant = Restaurant.objects.get(id=restaurant_id)
    except Restaurant.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    serializer = RestaurantSerializer(restaurant)
    return JsonResponse(serializer.data)

@csrf_exempt
def delivery_detail(request, delivery_id):
    try:
        delivery = Delivery.objects.get(id=delivery_id)
    except Delivery.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    serializer = DeliverySerializer(delivery)
    return JsonResponse(serializer.data)