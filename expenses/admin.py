from django.contrib import admin
from .models import Expense, Category

# Register your models here.
class ExpenseAdmin(admin.ModelAdmin):
    list_display = ('owner', 'amount', 'description', 'category', 'date',)
    search_fields = ('owner', 'amount', 'description', 'category', 'date',)
    list_per_page = 8
admin.site.register(Expense, ExpenseAdmin)
admin.site.register(Category)