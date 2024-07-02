import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ProjectComponent } from '../../components/project/project.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SkillComponent } from '../../components/skill/skill.component';
import { CertificationsComponent } from '../../components/certifications/certifications.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, ProjectComponent, ContactComponent, FooterComponent, SkillComponent, CertificationsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
