from django.contrib import admin

# Register your models here.
from menu.models import Product, Category, Delivery, Restaurant, Customer


class DeliveryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'ph_delivery', 'rating']

class RestaurantAdmin(admin.ModelAdmin):
    list_display = ['id', 'delivery', 'name', 'description', 'ph_restaurant', 'city', 'address']

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'restaurant', 'name', 'description', 'photo']

class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'category', 'name', 'description', 'price', 'ph_product']

class CustomerAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'password', 'email']

admin.site.register(Category,  CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Delivery, DeliveryAdmin)
admin.site.register(Restaurant, RestaurantAdmin)
admin.site.register(Customer,  CustomerAdmin)
