from django.contrib import admin
from .models import Source, UserIncome

# Register your models here.
class IncomeAdmin(admin.ModelAdmin):
    list_display = ('owner', 'amount', 'description', 'source', 'date',)
    search_fields = ('owner', 'amount', 'description', 'source', 'date',)
    list_per_page = 8
admin.site.register(UserIncome, IncomeAdmin)
admin.site.register(Source)