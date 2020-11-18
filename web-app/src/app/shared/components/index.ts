import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

export const components: any[] = [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
]

export * from './footer/footer.component';
export * from './header/header.component';
export * from './navbar/navbar.component';
export * from './sidebar/sidebar.component'