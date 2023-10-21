import { nanoid } from "@reduxjs/toolkit";

const announcementsData = 
{
    pinned: [
        {
        "id": "abcd1234",
        "title": "Math - New math competition announced",
        "datetime": "2023/10/21",
        "description": "A new math competition has been announced for all students in grades 9-12. The competition will be held on Saturday, November 12th at 9:00am in the school library. To register, please visit the math department website."
        },
        {
        "id": "efgh5678",
        "title": "English - Book club meeting this week",
        "datetime": "2023/10/21",
        "description": "The English book club will be meeting this Thursday at 3:00pm in the school library. We will be discussing the book 'The Hunger Games' by Suzanne Collins. All students are welcome to attend."
        },
        {
        "id": "ijkl9012",
        "title": "Science - Science fair entries due next week",
        "datetime": "2023/10/21",
        "description": "All science fair entries must be submitted to the science department by next Friday, October 28th at 5:00pm. For more information on the science fair, please visit the science department website."
        }
    ],
    regular: [
        {
        "id": "mnopqrst",
        "title": "Social Studies - Field trip to the museum next month",
        "datetime": "2023/10/21",
        "description": "All social studies students will be going on a field trip to the museum next month on November 8th. The field trip will be from 9:00am to 1:00pm. Parents must sign a permission slip for their child to attend. Permission slips can be found in the social studies office."
        },
        {
        "id": "uvwx1234",
        "title": "World Languages - Language club meeting this week",
        "datetime": "2023/10/21",
        "description": "The language club will be meeting this Wednesday at 4:00pm in room 123. We will be practicing our Spanish and French language skills. All students are welcome to attend."
        },
        {
        "id": "yzab5678",
        "title": "Art - New art exhibit in the school library",
        "datetime": "2023/10/21",
        "description": "A new art exhibit is now on display in the school library. The exhibit features artwork from students in grades 9-12. The exhibit will be on display for the next two weeks. All students are welcome to visit the exhibit during school hours."
        },
        {
        "id": "cdef9012",
        "title": "Music - Fall concert next week",
        "datetime": "2023/10/21 - 16:55 PM",
        "description": "The fall concert will be held next Friday, October 28th at 7:00pm in the auditorium. The concert will feature performances from the school band, choir, and orchestra. Tickets are $5 for students and $10 for adults. Tickets can be purchased at the door."
        },
        {
        "id": "ghij1234",
        "title": "Athletics - Tryouts for winter sports next week",
        "datetime": "2023/10/21 - 16:55 PM",
        "description": "Tryouts for winter sports will be held next week. Tryouts for basketball will be on Monday, tryouts for soccer will be on Tuesday, and tryouts for wrestling will be on Wednesday. All tryouts will be held from 3:00pm to 5:00pm in the gym. Students must have a physical on file in order to try out for a sport."
        }
    ]
}

export default announcementsData