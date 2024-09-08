var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contact');
    var addressElement = document.getElementById('address');
    var nationalityElement = document.getElementById('nationality');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var profilePictureElement = document.getElementById('profilePicture');
    if (nameElement && emailElement && contactElement && addressElement && nationalityElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var address = addressElement.value;
        var nationality = nationalityElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create resume output
        var resumeOutput_1 = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Contact Number:</strong> ").concat(contact, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            <p><strong>Nationality:</strong> ").concat(nationality, "</p>\n\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // Handle profile picture
        if (profilePictureElement && profilePictureElement.files && profilePictureElement.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                var imageDataUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                resumeOutput_1 = "\n                    <div class=\"profilePictureContainer\">\n                        <img src=\"".concat(imageDataUrl, "\" class=\"profilePicture\" alt=\"Profile Picture\">\n                    </div>\n                    ").concat(resumeOutput_1, "\n                ");
                var resumeOutputElement = document.getElementById('resumeOutput');
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput_1;
                }
            };
            reader.readAsDataURL(profilePictureElement.files[0]);
        }
        else {
            var resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput_1;
            }
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
