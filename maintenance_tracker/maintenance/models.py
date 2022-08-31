from django.db import models
from DjangoCore.core.models import BaseModel, TrackableModel
from maintenance.model_utils import UsageType

class VehicleTypes(BaseModel, TrackableModel):
    pass


# The item maintenance is being performed on: examples inclide Chevrolet Camaro, Kawasaki Motocycle,
# John Deere Tractor etc.
class MaintenanceVehicle(BaseModel, TrackableModel):
    type = models.ForeignKey(VehicleTypes, on_delete=models.DO_NOTHING)
    make = models.CharField(max_length=255)
    model = models.CharField(max_length=255)
    year = models.IntegerField()
    identifier = models.CharField(max_length=255, blank=True, null=True) # EX: Vin
    usage_type = models.CharField(max_length=255, choices=((x.value[0], x.value[1]) for x in UsageType.all()))
    operation_hours = models.DecimalField(blank=True, null=True, max_digits=12, decimal_places=2)
    miles = models.DecimalField(blank=True, null=True, max_digits=12, decimal_places=2)


# actions performed on a given Maintanence Item
class MaintenanceAction(BaseModel, TrackableModel):
    allowed_types = models.ManyToManyField(VehicleTypes)
    notes = models.TextField(blank=True, null=True)


# A Record of all Actions performed
class MaintenanceRecord(BaseModel, TrackableModel):
    date = models.DateField(auto_now_add=True)
    usage = models.DecimalField(max_digits=12, decimal_places=2) # ODO Reading or Hour Usage
    location = models.CharField(max_length=999)
    professional = models.BooleanField(default=False)
    notes = models.TextField()
