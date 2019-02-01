import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosMarteComponent } from './fotos-marte.component';

describe('FotosMarteComponent', () => {
  let component: FotosMarteComponent;
  let fixture: ComponentFixture<FotosMarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosMarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosMarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
