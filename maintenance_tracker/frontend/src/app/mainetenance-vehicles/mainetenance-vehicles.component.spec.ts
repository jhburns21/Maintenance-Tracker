import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainetenanceVehiclesComponent } from './mainetenance-vehicles.component';

describe('MainetenanceVehiclesComponent', () => {
  let component: MainetenanceVehiclesComponent;
  let fixture: ComponentFixture<MainetenanceVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainetenanceVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainetenanceVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
