// import { Component } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { FooterComponent } from './contact.component';
//
// describe('Component: Footer', () => {
//   let builder: TestComponentBuilder;
//
//   beforeEachProviders(() => [FooterComponent]);
//   beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
//     builder = tcb;
//   }));
//
//   it('should inject the component', inject([FooterComponent],
//       (component: FooterComponent) => {
//     expect(component).toBeTruthy();
//   }));
//
//   it('should create the component', inject([], () => {
//     return builder.createAsync(FooterComponentTestController)
//       .then((fixture: ComponentFixture<any>) => {
//         let query = fixture.debugElement.query(By.directive(FooterComponent));
//         expect(query).toBeTruthy();
//         expect(query.componentInstance).toBeTruthy();
//       });
//   }));
// });
//
// @Component({
//   selector: 'test',
//   template: `
//     <app-contact></app-contact>
//   `,
//   directives: [FooterComponent]
// })
// class FooterComponentTestController {
// }
//
