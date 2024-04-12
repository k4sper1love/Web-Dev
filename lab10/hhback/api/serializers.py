from rest_framework import serializers
from .models import Vacancy, Company

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField()
    city = serializers.CharField(max_length=100)
    address = serializers.CharField()

    def create(self, validated_data):
        return Company.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance
    
class VacancyModelSerializer(serializers.Serializer):
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company']

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['id'] = instance.id
        rep['name'] = instance.name
        rep['description'] = instance.description
        rep['salary'] = instance.salary
        rep['company'] = instance.company.name
        return rep