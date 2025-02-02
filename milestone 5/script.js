"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Get form elements 
    const profilePictureInput = document.getElementById("profilePicture");
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");
    const educationElement = document.getElementById("education");
    const experienceElement = document.getElementById("experience");
    const skillsElement = document.getElementById("skills");
    // Check if all form elements are present
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        // Get values from form
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        // Handle profile picture
        const profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        const profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        // Generate the resume HTML content
        const resumeHTML = `
                <h2>Resume</h2>
                ${profilePictureURL
            ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
            : ""}
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phone}</p>

                <h3>Education</h3>
                <p>${education}</p>

                <h3>Experience</h3>
                <p>${experience}</p>

                <h3>Skills</h3>
                <p>${skills}</p>
            `;
        // Display the resume in the output container
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove("hidden");
            // Create container for buttons
            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);
            // Add Download PDF button
            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", () => {
                window.print(); // Open the print dialog, allowing the user to save as PDF.
            });
            buttonsContainer.appendChild(downloadButton);
            // Add Shareable Link button
            const shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                try {
                    // Create a unique shareable link (simulate it in this case)
                    const shareableLink = `https://yourdomain.com/resumes/${name.replace(/\s+/g, "_")}_cv.html`;
                    // Use clipboard API to copy the shareable link
                    yield navigator.clipboard.writeText(shareableLink);
                    alert("Shareable link copied to clipboard!");
                }
                catch (err) {
                    console.error("Failed to copy link: ", err);
                    alert("Failed to copy link to Clipboard. Please try again.");
                }
            }));
            buttonsContainer.appendChild(shareLinkButton);
        }
    }
});
