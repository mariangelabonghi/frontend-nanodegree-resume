var data = '%data%';
var bio = {
    "name": "Fry",
    "role": "Web developer",
    "contacts": {
        "mobile": "0000 000 0000000",
        "email": "fry.fry@gmail.com",
        "github": "fry.fry",
        "twitter": "@fry",
        "location": "Milan"
    },
    "welcomeMessage": "Lorem ipsum dolor sit amet etc etc etc.",
    "skills": ["programming", "functional analyst", "software tester"],
    "biopic": "images/fry.jpg",
    display: function() {
        var formattedName = HTMLheaderName.replace(data,bio.name);
        var formattedRole = HTMLheaderRole.replace(data,bio.role);
        $("#header").prepend(formattedName + formattedRole);
        var formattedMobile = HTMLmobile.replace(data,bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(data,bio.contacts.email);
        var formattedGithub = HTMLgithub.replace(data,bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace(data,bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace(data,bio.contacts.location);
        var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
        $("#topContacts").append(formattedContacts);
        $("#footerContacts").append(formattedContacts);
        var formattedPicture = HTMLbioPic.replace(data,bio.biopic);
        $("#header").append(formattedPicture);
        var formattedWmsg = HTMLwelcomeMsg.replace(data,bio.welcomeMessage);
        $("#header").append(formattedWmsg);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
                var formattedSkills = HTMLskills.replace(data,bio.skills[indexCount]);
                $("#skills").append(formattedSkills);
            }
        }
    }
};

var work = {
    "jobs": [{
        "employer": "GFGF Spa",
        "title": "Web Developer",
        "location": "Berlin",
        "dates": "In progress",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque diam, bibendum ut vestibulum sit amet, laoreet suscipit nunc. Vivamus vehicula justo at sollicitudin congue. Nullam porta commodo congue. Vestibulum varius viverra sapien non maximus. Quisque ac nunc sem. Praesent viverra eget eros et fringilla. Sed blandit fringilla justo, at laoreet sem vestibulum quis. In volutpat pretium leo, ut vestibulum diam sollicitudin a. Suspendisse consequat libero ut feugiat efficitur."
    }, {
        "employer": "FRG Spa",
        "title": "Functional Analyst",
        "location": "Dublin",
        "dates": "From 04/2011 To 03/2013",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque diam, bibendum ut vestibulum sit amet, laoreet suscipit nunc. Vivamus vehicula justo at sollicitudin congue. Nullam porta commodo congue. Vestibulum varius viverra sapien non maximus. Quisque ac nunc sem. Praesent viverra eget eros et fringilla. Sed blandit fringilla justo, at laoreet sem vestibulum quis. In volutpat pretium leo, ut vestibulum diam sollicitudin a. Suspendisse consequat libero ut feugiat efficitur."
    }, {
        "employer": "GTD Spa",
        "title": "Technical Analyst",
        "location": "London",
        "dates": "From 03/2013 To 09/2014",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque diam, bibendum ut vestibulum sit amet, laoreet suscipit nunc. Vivamus vehicula justo at sollicitudin congue. Nullam porta commodo congue. Vestibulum varius viverra sapien non maximus. Quisque ac nunc sem. Praesent viverra eget eros et fringilla. Sed blandit fringilla justo, at laoreet sem vestibulum quis. In volutpat pretium leo, ut vestibulum diam sollicitudin a. Suspendisse consequat libero ut feugiat efficitur."
    }],
    display: function() {
        if (work.jobs.length > 0) {
            for (job in work.jobs) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace(data,work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace(data,work.jobs[job].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);
                var formattedDates = HTMLworkDates.replace(data,work.jobs[job].dates);
                $(".work-entry:last").append(formattedDates);
                var formattedDescription = HTMLworkDescription.replace(data,work.jobs[job].description);
                $(".work-entry:last").append(formattedDescription);
            }
        }
    }
};

var projects = {
    "projects": [{
        "title": "Online Resume",
        "dates": "From 06/2016 to 07/2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque diam, bibendum ut vestibulum sit amet, laoreet suscipit nunc. Vivamus vehicula justo at sollicitudin congue. Nullam porta commodo congue. Vestibulum varius viverra sapien non maximus. Quisque ac nunc sem. Praesent viverra eget eros et fringilla. Sed blandit fringilla justo, at laoreet sem vestibulum quis. In volutpat pretium leo, ut vestibulum diam sollicitudin a. Suspendisse consequat libero ut feugiat efficitur.",
        "images": ["images/Image1Project1.jpg", "images/Image2Project1.jpg", "images/Image3Project1.jpg"]
    }, {
        "title": "Online Portfolio",
        "dates": "From 05/2016 to 06/2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque diam, bibendum ut vestibulum sit amet, laoreet suscipit nunc. Vivamus vehicula justo at sollicitudin congue. Nullam porta commodo congue. Vestibulum varius viverra sapien non maximus. Quisque ac nunc sem. Praesent viverra eget eros et fringilla. Sed blandit fringilla justo, at laoreet sem vestibulum quis. In volutpat pretium leo, ut vestibulum diam sollicitudin a. Suspendisse consequat libero ut feugiat efficitur.",
        "images": ["images/Image1Project2.jpg", "images/Image2Project2.jpg"]
    }],
    display: function() {
        if (projects.projects.length > 0) {
            for (project in projects.projects) {
                $("#projects").append(HTMLprojectStart);
                var formattedTitle = HTMLprojectTitle.replace(data,projects.projects[project].title);
                $(".project-entry:last").append(formattedTitle);
                var formattedDates = HTMLprojectDates.replace(data,projects.projects[project].dates);
                $(".project-entry:last").append(formattedDates);
                var formattedDescription = HTMLprojectDescription.replace(data,projects.projects[project].description);
                $(".project-entry:last").append(formattedDescription);
                if (projects.projects[project].images.length > 0) {
                    for (var indexCount = 0; indexCount < projects.projects[project].images.length; indexCount++) {
                        var formattedImage = HTMLprojectImage.replace(data,projects.projects[project].images[indexCount]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "Politecnico",
        "location": "Amsterdam",
        "degree": "Electronic Engineering",
        "majors": ["Electronic", "Optic", "Physics"],
        "dates": "From 2000 to 2005",
        "url": "www.fakeurl1.it"
    }, {
        "name": "High School",
        "location": "Bruxelles",
        "degree": "High School",
        "majors": ["Science", "Mathematics"],
        "dates": "From 1997 to 2000",
        "url": "www.fakeurl2.it"
    }],
    "onlineCourses": [{
        "title": "Front-end web developer program",
        "school": "Udacity",
        "dates": "In progress",
        "url": "https://www.udacity.com/nanodegree"
    }, {
        "title": "Introduction to Game Development",
        "school": "Coursera",
        "dates": "From 06/2015 to 09/2015",
        "url": "https://www.coursera.org/learn/game-development"
    }],
    display: function() {
        $("#education").append(HTMLschoolStart);
        if (education.schools.length > 0) {
            for (school in education.schools) {
                var formattedSchoolName = HTMLschoolName.replace(data,education.schools[school].name);
                var formattedSchoolDegree = HTMLschoolDegree.replace(data,education.schools[school].degree);
                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
                var formattedSchoolDate = HTMLschoolDates.replace(data,education.schools[school].dates);
                $(".education-entry:last").append(formattedSchoolDate);
                var formattedSchoolLocation = HTMLschoolLocation.replace(data,education.schools[school].location);
                $(".education-entry:last").append(formattedSchoolLocation);
                var formattedSchoolMajor = HTMLschoolMajor.replace(data,education.schools[school].majors);
                $(".education-entry:last").append('<br>' + formattedSchoolMajor);
            }
        }
        if (education.onlineCourses.length > 0) {
            $(".education-entry:last").append(HTMLonlineClasses);
            for (onlineCourse in education.onlineCourses) {
                var formattedCourseTitle = HTMLonlineTitle.replace(data,education.onlineCourses[onlineCourse].title);
                var formattedCourseSchool = HTMLonlineSchool.replace(data,education.onlineCourses[onlineCourse].school);
                $(".education-entry:last").append(formattedCourseTitle + formattedCourseSchool);
                var formattedCourseDates = HTMLonlineDates.replace(data,education.onlineCourses[onlineCourse].dates);
                $(".education-entry:last").append(formattedCourseDates);
                var formattedCourseUrl = HTMLonlineURL.replace(data,education.onlineCourses[onlineCourse].url);
                $(".education-entry:last").append('<p>' + formattedCourseUrl + '</p>');
            }
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);