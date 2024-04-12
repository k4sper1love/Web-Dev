from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancyModelSerializer

@api_view(['GET'])
def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def company_detail(request, id):
    company = Company.objects.get(id=id)
    serializer = CompanySerializer(company)
    return Response(serializer.data)

class CompanyVacancyList(APIView):
    def get(self, request, id):
        vacancies = Vacancy.objects.filter(company=id)
        serializer = VacancyModelSerializer(vacancies, many=True)
        return Response(serializer.data)

class VacancyList(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancyModelSerializer(vacancies, many=True)
        return Response(serializer.data)

class VacancyDetail(APIView):
    def get(self, request, id):
        vacancy = Vacancy.objects.get(id=id)
        serializer = VacancyModelSerializer(vacancy)
        return Response(serializer.data)
    

class TopTenVacancies(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancyModelSerializer(vacancies, many=True)
        return Response(serializer.data)