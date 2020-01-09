import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  /**
  studentId = '9958';
  studentName = 'Five';
  studentStatus = 'จบแล้ว';

  studentId2 = '9959';
  studentName2 = 'DekDee';
  studentStatus2 = 'กำลังศึกษา';
  */
  studentList = [
    {
        studentId: '9958',
        studentName: 'Five',
        studentStatus: 'จบแล้ว'
    },
    {
        studentId: '9959',
        studentName: 'DekDee',
        studentStatus: 'กำลังศึกษา'
    },
    {
        studentId: '9960',
        studentName: 'Zeza',
        studentStatus: 'จบแล้ว'
    }
];

  allowNewStudent = false;
  studentCreationStatus = 'No student created!';
  studentNewName = '';
  studentCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewStudent = true;
    }, 1000);
  }

  ngOnInit() {
  }

  onGetId() {
      //return this.studentId;
  }

  onGetName() {
      //return this.studentName;
  }

  onCreateStudent() {
      this.studentCreated = true;
      this.studentCreationStatus = 'Student created';
  }

  onUpdateStudentName(event: Event) {
      this.studentNewName = (<HTMLInputElement>event.target).value;
  }

  getColorStatus(status: string) {
      return status === 'จบแล้ว' ? 'green' : 'red';
  }

}
