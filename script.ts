document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactElement = document.getElementById('contact') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const nationalityElement = document.getElementById('nationality') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const profilePictureElement = document.getElementById('profilePicture') as HTMLInputElement;

    if (nameElement && emailElement && contactElement && addressElement && nationalityElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const contact = contactElement.value;
        const address = addressElement.value;
        const nationality = nationalityElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create resume output
        let resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact Number:</strong> ${contact}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Nationality:</strong> ${nationality}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Experience</h3>
            <p>${experience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Handle profile picture
        if (profilePictureElement && profilePictureElement.files && profilePictureElement.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageDataUrl = e.target?.result as string;
                resumeOutput = `
                    <div class="profilePictureContainer">
                        <img src="${imageDataUrl}" class="profilePicture" alt="Profile Picture">
                    </div>
                    ${resumeOutput}
                `;
                const resumeOutputElement = document.getElementById('resumeOutput');
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                }
            };
            reader.readAsDataURL(profilePictureElement.files[0]);
        } else {
            const resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
            }
        }
    } else {
        console.error('One or more form elements are missing');
    }
});