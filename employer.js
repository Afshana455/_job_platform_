document.getElementById("seekerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let skills = document.getElementById("skills").value;
    
    
    let jobs = ["பண்டகச்சாலை தொழிலாளி", "டெலிவரி ஓட்டுநர்", "டேட்டா எண்ட்ரி"];
    let jobList = document.getElementById("jobList");
    jobList.innerHTML = "";
    
    jobs.forEach(job => {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = job;
        li.style.animation = "fadeIn 0.5s ease-in-out"; // Animated list item
        jobList.appendChild(li);
    });
});

document.getElementById("employerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let jobTitle = document.getElementById("jobTitle").value;
    let jobSkills = document.getElementById("jobSkills").value;
    
    let jobPosts = document.getElementById("jobPosts");
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${jobTitle} (திறன்கள்: ${jobSkills})`;
    li.style.animation = "fadeIn 0.5s ease-in-out";
    jobPosts.appendChild(li);
});

