import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEndpointComponent } from './save-endpoint.component';

describe('SaveEndpointComponent', () => {
  let component: SaveEndpointComponent;
  let fixture: ComponentFixture<SaveEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
