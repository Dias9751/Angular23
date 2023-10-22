from rest_framework import serializers
from menu.models import Category, Product, Restaurant, Delivery, Customer


class DeliverySerializer(serializers.ModelSerializer):
    name = serializers.CharField()

    class Meta:
        model = Delivery
        fields = ('id', 'name', 'ph_delivery', 'rating')


class RestaurantSerializer(serializers.ModelSerializer):
    delivery = DeliverySerializer(read_only=True)
    delivery_id = serializers.IntegerField(write_only=True)
    
    # products = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # products = serializers.StringRelat    edField(many=True, read_only=True)
    # products = Product2Serializer(many=True, read_only=True)
    class Meta:
        model = Restaurant
        fields = ('id', 'name', 'description', 'ph_restaurant', 'city', 'address', 'delivery', 'delivery_id')
        # read_only_fields = ('name',)

class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data['name'])
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.save()
        return instance


class ProductSerializer2(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'ph_product')
        
class CategorySerializer2(serializers.ModelSerializer):
    restaurant = RestaurantSerializer(read_only=True)
    restaurant_id = serializers.IntegerField(write_only=True)
    
    # products = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # products = serializers.StringRelat    edField(many=True, read_only=True)

    # products = Product2Serializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'description', 'photo', 'restaurant', 'restaurant_id')
        # read_only_fields = ('name',)


class ProductSerializer(serializers.ModelSerializer):
    #category = CategorySerializer2(read_only=True)
    #category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'ph_product')

class CategorySerializer3(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'name', 'description', 'photo')


class CustomerSerializer(serializers.ModelSerializer):
    name = serializers.CharField()

    class Meta:
        model = Customer
        fields = ('id', 'name', 'password', 'email')