import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent  {
  courses = [
    { 
      id: 1, 
      title: 'Advanced Human Anatomy', 
      description: 'A comprehensive exploration of the human body’s structure and function.',
      fullDescription: 'This course covers the intricate details of human anatomy, including bone structures, muscular systems, and organs. Suitable for medical students and practitioners.',
      duration: '8 weeks',
      level: 'Intermediate',
      instructor: 'Dr. John Smith',
      prerequisites: 'Basic Biology or equivalent'
    },
    { 
      id: 2, 
      title: 'Pharmacology: Drug Mechanisms', 
      description: 'Understand how various drugs interact with the body and their mechanisms of action.',
      fullDescription: 'This course provides an in-depth look at pharmacology, covering the types of drugs, their molecular interactions, and their clinical applications. Ideal for students interested in pharmacy or medicine.',
      duration: '6 weeks',
      level: 'Intermediate',
      instructor: 'Dr. Sarah Lee',
      prerequisites: 'Basic Chemistry'
    },
    { 
      id: 3, 
      title: 'Medical Ethics and Law', 
      description: 'An in-depth study of the ethical and legal issues faced by healthcare professionals.',
      fullDescription: 'This course discusses the ethical dilemmas in healthcare, patient rights, and the legal responsibilities of healthcare providers.',
      duration: '4 weeks',
      level: 'Intermediate',
      instructor: 'Dr. Michael Brown',
      prerequisites: 'Introduction to Healthcare or equivalent'
    },
    { 
      id: 4, 
      title: 'Pathophysiology: Disease Mechanisms', 
      description: 'Learn how diseases develop at the cellular and systemic levels.',
      fullDescription: 'Explore the causes and mechanisms of disease development, focusing on cardiovascular, respiratory, and metabolic diseases. Perfect for medical students or practitioners.',
      duration: '10 weeks',
      level: 'Intermediate',
      instructor: 'Dr. Alice Green',
      prerequisites: 'Basic Physiology'
    },
  ];

  selectedCourse: any = null;

  viewCourseDetails(courseId: number) {
    this.selectedCourse = this.courses.find(course => course.id === courseId);
  }

  closeDetails() {
    this.selectedCourse = null;
  }

}
