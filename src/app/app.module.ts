import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddnewComponent } from './addnew/addnew.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFouncComponent } from './page-not-founc/page-not-founc.component';
import { CustomerComponent } from './customer/customer.component';
import { ListingComponent } from './listing/listing.component';
import { TokenInterceptor } from './Shared/token.interceptor';
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { LowerPipe } from './shared/lower.pipe';
import { ValidateAgePipe } from './shared/validate-age.pipe';
import { TopLayerComponent } from './ContentProjection/top-layer/top-layer.component';
import { BottomLayerComponent } from './ContentProjection/bottom-layer/bottom-layer.component';
import { FirstCommunicationComponent } from './CompCommun/first/first.component';
import { SecondCommunicationComponent } from './CompCommun/second/second.component';
import { MajorBlockComponent } from './CompCommun/major-block/major-block.component';
import { ParentComponent } from './ParentChildCommunication/parent/parent.component';
import { ChildComponent } from './ParentChildCommunication/child/child.component';
import { ObservableExComponent } from './observable-ex/observable-ex.component';
import { WebWorkerTestComponent } from './WebWorker/web-worker-test/web-worker-test.component';
import { DepEx1Component } from './DependencyInjection/dep-ex1/dep-ex1.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    LoginComponent,
    AddnewComponent,
    PageNotFouncComponent,
    CustomerComponent,
    ListingComponent,
    InBuiltDirectivesComponent,
    PipesComponent,
    LowerPipe,
    ValidateAgePipe,
    TopLayerComponent,
    BottomLayerComponent,
    FirstCommunicationComponent,
    SecondCommunicationComponent,
    MajorBlockComponent,
    ParentComponent,
    ChildComponent,
    ObservableExComponent,
    WebWorkerTestComponent,
    DepEx1Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
