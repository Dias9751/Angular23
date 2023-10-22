from django.db import models

# Create your models here.
class Delivery(models.Model):
    name =  models.CharField(max_length=50)
    ph_delivery = models.CharField(max_length = 300)
    rating = models.FloatField(default = 0)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'ph_delivery': self.ph_delivery,
            'rating': self.rating
        }

class Restaurant(models.Model):
    delivery = models.ForeignKey(Delivery, on_delete=models.CASCADE)
    name =  models.CharField(max_length=50)
    description = models.TextField(default="")
    ph_restaurant = models.CharField(max_length=300)
    city = models.CharField(max_length = 30)
    address = models.CharField(max_length = 100)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'ph_restaurant': self.ph_restaurant,
            'city': self.city,
            'address': self.address
        }

class Category(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    name =  models.CharField(max_length=50)
    description = models.TextField(default="")
    photo = models.CharField(max_length=300)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'photo': self.photo
        }


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=300)
    price = models.FloatField(default=0)
    description = models.TextField(default="")
    ph_product = models.CharField(max_length=300)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'ph_product': self.ph_product
        }

class Customer(models.Model):
    name = models.TextField(default="")
    password = models.TextField(default="")
    email = models.TextField(default="")

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'password': self.password,
            'email': self.email
        }